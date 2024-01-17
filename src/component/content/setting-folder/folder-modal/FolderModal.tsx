import Modal from "react-modal";
import SubscribeSection from "./sbscribe-section/SubscribeSection";
import MemberSection from "./member-section/MemberSection";
import { Folder } from "../../../layout/sidebar/SideBarType";

type Props = {
  isFolderModalOpen: boolean;
  setIsFolderModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  folder?: Folder;
  setFolder: React.Dispatch<React.SetStateAction<Folder | undefined>>;
};

export default function FolderModal({
  isFolderModalOpen,
  setIsFolderModalOpen,
  folder,
  setFolder
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
              setFolder={setFolder}
            />
            <MemberSection
              folder={folder}
              setFolder={setFolder}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
