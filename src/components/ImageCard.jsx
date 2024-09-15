import styles from "./imageCard.module.css";
function ImageCard({ image }) {
  if (!image || !image.urls || !image.urls.small) {
    return null; // 
  }

  return (
    <div className={styles.card}>
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
}

export default ImageCard;
