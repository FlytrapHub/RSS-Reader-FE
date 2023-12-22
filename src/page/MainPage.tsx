import { ReactNode } from "react";
import Layout from "../component/layout/Layout";
import { useLocation } from "react-router-dom";
import AllPostListContent from "../component/content/AllPostListContent";
import BookmarkListContent from "../component/content/BookmarkListContent";
import SubscribePostListContent from "../component/content/SubscribePostListContent";
import { Pages } from "../constants/Pages";
import FolderSettingContent from "../component/content/FolderSettingContent";

type Props = {
  page: Pages;
};

export default function MainPage({page} :Props) {
  
  const location = useLocation();
  let headerTitle = page;
  let content: ReactNode;
  let key: number = 0;

  switch (page) {
    case Pages.ALL_POST: {
      content = <AllPostListContent />
      break;
    }
    case Pages.BOOKMARK: {
      content = <BookmarkListContent />
      break;
    }
    case Pages.SUBSCRIBE: {
        const data = location.state;
        headerTitle = data.subscribeTitle;
        key = data.subscribeId;
        content = <SubscribePostListContent key={key} subscribeId={data.subscribeId} />
        break;
    }
    case Pages.SET_FOLDERS: {
      content = <FolderSettingContent />
      break;
    }
  }
  
  return (
    <>
      <Layout headerTitle={headerTitle}>
          {content}
      </Layout>
    </>
  );
}
