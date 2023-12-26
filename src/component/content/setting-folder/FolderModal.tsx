import Modal from "react-modal";

type Props = {
  isFolderModalOpen: boolean;
  setIsFolderModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FolderModal({
  isFolderModalOpen,
  setIsFolderModalOpen,
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
          <button onClick={closeFolderModal}>close</button>
          <div>I am a modal : insert folder modal</div>
        </div>
      </Modal>
    </div>
  );
}
