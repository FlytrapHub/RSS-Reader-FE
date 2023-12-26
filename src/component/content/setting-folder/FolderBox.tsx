import { Icon } from "../../common/Icon";
import { Folder } from "../../layout/sidebar/SideBarType";

type Props = {
  folder: Folder,
  setIsFolderModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function FolderBox({ folder, setIsFolderModalOpen }: Props) {

  const openFolderModal = () => {
    setIsFolderModalOpen(true);
  }

  return (
    <div className="h-10 flex items-center hover:bg-success rounded-lg" onClick={openFolderModal}>
      <div className="flex-none w-1/12 mx-3">
        <Icon name="folder" size="L" />
      </div>
      <div className="flex-1 w-full text-lg text-left">{folder.name}</div>
      <div className="flex-none w-1/12 flex"></div>
    </div>
  );
}
