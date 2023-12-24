import { ReactNode, useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import { useLocation } from "react-router-dom";
import AllPostListContent from "../component/content/AllPostListContent";
import BookmarkListContent from "../component/content/BookmarkListContent";
import SubscribePostListContent from "../component/content/SubscribePostListContent";
import { Pages } from "../constants/Pages";
import FolderSettingContent from "../component/content/FolderSettingContent";
import { Folder } from "../component/layout/sidebar/SideBarType";
import axios from "axios";
import { API_PATH } from "../constants/ApiPath";

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

  useEffect(() => {
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
  }, []);

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
          sharedFolders={sharedFolders}
        />
      );
      break;
    }
  }

  return (
    <>
      <Layout
        headerTitle={headerTitle}
        privateFolders={privateFolders}
        sharedFolders={sharedFolders}
      >
        {content}
      </Layout>
    </>
  );
}
