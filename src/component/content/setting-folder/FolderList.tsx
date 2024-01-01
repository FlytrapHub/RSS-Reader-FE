import { Folder } from "../../layout/sidebar/SideBarType";
import FolderBox from "./FolderBox";

type Props = {
  title: string,
  folders: Folder[],
  setFolderForModal: React.Dispatch<React.SetStateAction<Folder | undefined>>, 
  setIsFolderModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export default function FolderList({ title, folders, setFolderForModal, setIsFolderModalOpen }: Props) {
  // const [isFolderModalOpen, setIsFolderModalOpen] = useState<boolean>(false);
  // const [folderForModal, setFolderForModal] = useState<Folder | undefined>();

  return (
    <>
      <h1 className="text-left text-lg font-bold mt-4 px-2">{title}</h1>
      <div className="border-2 border-success bg-green-50 rounded-box gap-2">
        {folders &&
          folders.map((folder: Folder, index: number) => (
            <FolderBox
              key={index}
              folder={folder}
              setFolderForModal={setFolderForModal}
              setIsFolderModalOpen={setIsFolderModalOpen}
            />
          ))}
      </div>
      {/* <FolderModal
        isFolderModalOpen={isFolderModalOpen}
        setIsFolderModalOpen={setIsFolderModalOpen}
        folder={folderForModal}
        setFolder={setFolderForModal}
      /> */}
    </>
  );
}
