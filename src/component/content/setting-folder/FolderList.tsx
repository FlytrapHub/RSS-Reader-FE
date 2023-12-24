import { Folder } from "../../layout/sidebar/SideBarType";
import FolderBox from "./FolderBox";

type Props = {
    folders: Folder[],
}

export default function FolderList({folders}: Props) {
  return (
    <div className="border-2 border-success bg-green-50 rounded-box gap-2">
      {folders && folders.map((folder: Folder, index: number) => (
        <FolderBox key={index} folder={folder} />
      ))}
    </div>
  );
}
