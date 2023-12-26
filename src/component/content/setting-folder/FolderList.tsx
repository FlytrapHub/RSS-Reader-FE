import { Folder } from "../../layout/sidebar/SideBarType";
import FolderBox from "./FolderBox";

type Props = {
  title: string,
  folders: Folder[],
}

export default function FolderList({ title, folders }: Props) {
  return (
    <>
      <h1 className="text-left text-lg font-bold mt-4 px-2">{title}</h1>
      <div className="border-2 border-success bg-green-50 rounded-box gap-2">
        {folders && folders.map((folder: Folder, index: number) => (
          <FolderBox key={index} folder={folder} />
        ))}
      </div>
    </>
  );
}
