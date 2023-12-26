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
        privateFolders={privateFolders}
        setPrivateFolders={setPrivateFolders}
        sharedFolders={sharedFolders}
        setSharedFolders={setSharedFolders}
      />
    </div>
  );
}
