import FolderSettingCard from "./setting-folder/FolderSettingCard";
import { Folder } from "../layout/sidebar/SideBarType";

type Props = {
  privateFolders: Folder[];
  setPrivateFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
  sharedFolders: Folder[];
  setSharedFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
};

export default function FolderSettingContent({
  privateFolders,
  setPrivateFolders,
  sharedFolders,
  setSharedFolders,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full p-4 justify-center">
      <FolderSettingCard
        title={"개인 폴더 관리"}
        folders={privateFolders}
        setFolders={setPrivateFolders}
      />
      <FolderSettingCard
        title={"공유 폴더 관리"}
        folders={sharedFolders}
        setFolders={setSharedFolders}
      />
    </div>
  );
}
