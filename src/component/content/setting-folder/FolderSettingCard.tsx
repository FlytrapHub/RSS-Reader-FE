import axios from "axios";
import { Folder } from "../../layout/sidebar/SideBarType";
import FolderList from "./FolderList";
import { API_PATH } from "../../../constants/ApiPath";
import { useState } from "react";

type Props = {
  title: string;
  folders: Folder[];
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>,
};

export default function FolderSettingCard({ title, folders, setFolders }: Props) {

  const [newFolderName, setNewFolderName] = useState<string>('');

  const isFolderNameEmpty = (): boolean => {
    return newFolderName !== undefined && newFolderName !== '';
  }

  const validFolderNameLength = (): boolean => {
    return newFolderName.length <= 10;
  }

  const alertInvalidFolderName = (): boolean => {
    if (!isFolderNameEmpty()) {
      alert('폴더명을 입력하세요.');
      return false;
    }
    if (!validFolderNameLength()) {
      alert('폴더명은 10글자 이내로 입력하세요.');
      return false;
    }
    return true;
  }

  const addFolder = () => {
    if (!alertInvalidFolderName()) {
      return;
    }

    axios
      .post(
        import.meta.env.VITE_BASE_URL + API_PATH.FOLDER.ADD,
        {
          name: newFolderName,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        if (response.status == 200) {
          const data = response.data.data;

          const newFolder: Folder = {
            id: data.folderId,
            name: data.folderName,
            unreadCount: 0,
            blogs: [],
            invitedMembers: [],
          };

          const updatedFolders = [...folders, newFolder];

          setFolders(updatedFolders);
        } else {
          throw new Error("Request failed: " + response.status);
        }
      })
      .catch(function (error) {
        console.log("error: {}", error);
      });
  };

  return (
    <div className="card lg:w-2/5 bg-base-100 border shadow-xl p-4">
      <div className="card-body">
        <div className="card-title mb-4">{title}</div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="추가할 폴더 이름을 입력해주세요."
            className="input input-bordered input-primary w-full"
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <button className="btn btn-square btn-secondary" onClick={addFolder}>+</button>
        </div>
        <FolderList folders={folders} />
      </div>
    </div>
  );
}
