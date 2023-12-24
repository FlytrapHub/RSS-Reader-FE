import FolderSettingCard from "./setting-folder/FolderSettingCard";
import { Folder } from "../layout/sidebar/SideBarType";

type Props = {
  privateFolders: Folder[],
  sharedFolders: Folder[],
};

export default function FolderSettingContent({ privateFolders, sharedFolders}: Props) {

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full p-4 justify-center">
      <FolderSettingCard title={'개인 폴더 관리'} folders={privateFolders} />
      <FolderSettingCard title={'공유 폴더 관리'} folders={sharedFolders} />
    </div>
  );
}
