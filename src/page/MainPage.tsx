import { ReactNode, useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import AllPostListContent from "../component/content/AllPostListContent";
import BookmarkListContent from "../component/content/BookmarkListContent";
import SubscribePostListContent from "../component/content/SubscribePostListContent";
import { Pages } from "../constants/Pages";
import FolderSettingContent from "../component/content/FolderSettingContent";
import { Folder } from "../component/layout/sidebar/SideBarType";
import axios from "axios";
import { API_PATH } from "../constants/ApiPath";
import { PATH } from "../constants/Path";
import { StoredMemberInfo } from "./auth/AuthTYpe";
import Header from "../component/layout/header/Header";

type Props = {
  page: Pages;
};

export default function MainPage({ page }: Props) {
  const location = useLocation();
  let headerTitle = page;
  let content: ReactNode;
  let key: number = 0;

  const [privateFolders, setPrivateFolders] = useState<Folder[]>([]);
  const [sharedFolders, setSharedFolders] = useState<Folder[]>([]);
  const [memberInfo, setMemberInfo] = useState<StoredMemberInfo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedMemberInfo = localStorage.getItem('MEMBER_INFO');
    if (storedMemberInfo) {
      setMemberInfo(JSON.parse(storedMemberInfo));
    } else {
      navigate(PATH.AUTH.LOGIN);
      alert('로그인이 필요한 페이지 입니다.');
      return;
    }

    axios
      .get(import.meta.env.VITE_BASE_URL + API_PATH.FOLDER.GET_ALL, {
        withCredentials: true,
      })
      .then(function (response) {
        if (response.status == 200) {
          const folders = response.data.data.folders;
          setPrivateFolders(folders.PRIVATE);
          setSharedFolders(folders.SHARED);
        } else {
          throw new Error("Request failed: " + response.status);
        }
      })
      .catch(function (error) {
        console.log("error: {}", error);
      });
  }, [navigate]);

  switch (page) {
    case Pages.ALL_POST: {
      content = <AllPostListContent />;
      break;
    }
    case Pages.BOOKMARK: {
      content = <BookmarkListContent />;
      break;
    }
    case Pages.SUBSCRIBE: {
      const data = location.state;
      headerTitle = data.subscribeTitle;
      key = data.subscribeId;
      content = (
        <SubscribePostListContent key={key} subscribeId={data.subscribeId} />
      );
      break;
    }
    case Pages.SET_FOLDERS: {
      content = (
        <FolderSettingContent
          privateFolders={privateFolders}
          setPrivateFolders={setPrivateFolders}
          sharedFolders={sharedFolders}
          setSharedFolders={setSharedFolders}
        />
      );
      break;
    }
  }

  return (
    <>
      <Layout
        privateFolders={privateFolders}
        sharedFolders={sharedFolders}
      >
        <Header title={headerTitle} memberInfo={memberInfo} setMemberInfo={setMemberInfo} />
        {content}
      </Layout>
    </>
  );
}
