import ReactModal from "react-modal";

const ImageModal = ({ handleOpenModal, isOpen, handleCloseModal, photo }) => {
  const { urls, alt_description } = photo;

  return (
    <div>
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Minimal Modal Example"
        ariaHideApp={false}
      >
        <img src={urls.regular} alt={alt_description} />
      </ReactModal>
    </div>
  );
};

export default ImageModal;
