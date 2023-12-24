import SideFolderTree from "./SideFolderTree";
import { Folder } from "./SideBarType";
import { PATH } from "../../../constants/Path";
import { useNavigate } from "react-router-dom";

type Props = {
  privateFolders: Folder[];
  sharedFolders: Folder[];
};

export default function SideMenu({ privateFolders, sharedFolders }: Props) {

  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
      <li>
        <a className="btn btn-success text-lg" onClick={() => goToPage(PATH.MAIN)}>전체 보기</a>
      </li>
      <li>
        <a className="btn btn-success text-lg" onClick={() => goToPage(PATH.BOOKMARK)}>북마크</a>
      </li>
      <li>
        <a className="btn btn-success text-lg" onClick={() => goToPage(PATH.SETTING.FOLDERS)}>구독 관리</a>
      </li>
      <div className="border-2 border-success bg-green-50 rounded-box gap-2">
        <li>
          <SideFolderTree title={"내 폴더"} folders={privateFolders} />
        </li>
        <li>
          <SideFolderTree title={"공유 폴더"} folders={sharedFolders} />
        </li>
      </div>
      <div>
        icons by <a href="https://icons8.com/" target="_blank">icons8.com</a>
      </div>
    </ul>
  );
}
