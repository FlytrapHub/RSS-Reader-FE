import Modal from "react-modal";
import SubscribeSection from "./SubscribeSection";
import MemberSection from "./MemberSection";
import { Folder } from "../../../layout/sidebar/SideBarType";

type Props = {
  isFolderModalOpen: boolean;
  setIsFolderModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  folder?: Folder;
  privateFolders: Folder[];
  setPrivateFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
  sharedFolders: Folder[];
  setSharedFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
};

export default function FolderModal({
  isFolderModalOpen,
  setIsFolderModalOpen,
  folder,
  privateFolders,
  setPrivateFolders,
  sharedFolders,
  setSharedFolders,
}: Props) {
  const closeFolderModal = () => {
    setIsFolderModalOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={isFolderModalOpen}
        className="bg-transparent flex justify-center items-center h-full"
      >
        <div className="card w-9/12 h-5/6 bg-base-100 shadow-xl">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeFolderModal}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">폴더 명</h3>

          <div className="flex md:flex-row flex-col gap-2">
            <SubscribeSection
              folder={folder}
              privateFolders={privateFolders}
              setPrivateFolders={setPrivateFolders}
              sharedFolders={sharedFolders}
              setSharedFolders={setSharedFolders}
            />
            <MemberSection
              folder={folder}
              privateFolders={privateFolders}
              setPrivateFolders={setPrivateFolders}
              sharedFolders={sharedFolders}
              setSharedFolders={setSharedFolders}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}