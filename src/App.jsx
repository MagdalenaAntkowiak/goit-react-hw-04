import ImageGallery from "./components/ImageGallery.jsx";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <ImageGallery openModal={openModal} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#111111",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "hidden",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        {selectedImage && (
          <div>
            <img
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
