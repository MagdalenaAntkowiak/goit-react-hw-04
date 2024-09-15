import styles from "./loadMoreBtn.module.css";

function LoadMoreBtn({ images, page, setPage }) {
  if (images.length === 0) return null;

  return (
    <div className={styles.divLoadMore}>
      <button className={styles.loadMoreBtn} onClick={() => setPage(page + 1)}>
        Load more
      </button>
    </div>
  );
}
export default LoadMoreBtn;
