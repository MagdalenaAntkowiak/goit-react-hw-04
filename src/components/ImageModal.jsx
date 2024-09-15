import Modal from "react-modal";


function ImageModal({ isOpen, image, onRequestClose }) {
  if (!image) return null; 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <div className={styles.modalContent}>
        <img
          src={image.urls.regular} 
          alt={image.alt_description}
          style={{ width: "100%", height: "auto" }}
        />
        <button className={styles.closeBtn} onClick={onRequestClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ImageModal;
