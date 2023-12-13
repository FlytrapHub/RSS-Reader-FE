import { useEffect, useState } from "react";
import SideFolderTree from "./SideFolderTree";
import axios from "axios";
import { Folder } from "./SideBarType";
import { API_PATH } from "../../../constants/ApiPath";
import { PATH } from "../../../constants/Path";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {

  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };

  const[privateFolders, setPrivateFolders] = useState<Folder[]>([]);
  const[sharedFolders, setSharedFolders] = useState<Folder[]>([]);

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
        console.log('error: {}', error)
      });
  }, []);

  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
      <li>
        <a className="btn btn-success text-lg" onClick={() => goToPage(PATH.MAIN)}>전체 보기</a>
      </li>
      <li>
        <a className="btn btn-success text-lg" onClick={() => goToPage(PATH.BOOKMARK)}>북마크</a>
      </li>
      <li>
        <a className="btn btn-success text-lg">구독 관리</a>
      </li>
      <div className="border-2 border-success bg-green-50 rounded-box gap-2">
        <li>
          <SideFolderTree title={"내 폴더"} folders={privateFolders} />
        </li>
        <li>
          <SideFolderTree title={"공유 폴더"} folders={sharedFolders} />
        </li>
      </div>
    </ul>
  );
}
