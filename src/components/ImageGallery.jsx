import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import LoadMoreBtn from "./LoadMoreBtn";
import styles from "./imageGallery.module.css";
import NoResultMessage from "./NoResultMessage";

function ImageGallery({ openModal }) {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const accessKey = "M5VwHGaSy7Rwg59ga-GZvNUY8l8le9C0vzHAfGvY9tY";

  const fetchImages = async () => {
    if (!query) return;

    setLoading(true);
    setError(null);
    setNoResults(false);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query, per_page: 12, page },
          headers: { Authorization: `Client-ID ${accessKey}` },
        }
      );

      if (response.data.results.length === 0) {
        setNoResults(true);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
    } catch (err) {
      setError("Something went wrong while fetching images");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery === query) {
      return;
    }
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />

      <Loader loading={loading} />

      {error && <ErrorMessage error={error} />}

      {noResults && <NoResultMessage message="No search results" />}

      <div className={styles.containerGallery}>
        {images.map((image, index) => (
          <div
            className={styles.divImg}
            key={`${image.id}-${index}`}
            onClick={() => openModal(image)}
          >
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        ))}
      </div>

      <LoadMoreBtn images={images} page={page} setPage={setPage} />
    </div>
  );
}

export default ImageGallery;
