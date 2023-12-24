import { Icon } from "../../common/Icon";
import { Folder } from "../../layout/sidebar/SideBarType";

type Props = {
  folder: Folder,
}

export default function FolderBox({folder}: Props) {
  return (
    <div className="h-10 flex items-center hover:bg-success rounded-lg">
      <div className="flex-none w-1/12 ml-3">
        <Icon name="folder" size="L" />
      </div>
      <div className="flex-1 w-full text-lg">{folder.name}</div>
      <div className="flex-none w-1/12 flex"></div>
    </div>
  );
}
