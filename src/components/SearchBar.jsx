import styles from "./searchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const notify = () =>
  toast.error("Field required", {
    style: {
      border: "1px solid #111111",
      padding: "12px",
      color: "#111111",
      background: "#ffb6c1",
      fontWeight: "bold",
    },
  });

function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      notify();
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <header>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
        <Toaster position="top-left" reverseOrder={false} />
      </form>
    </header>
  );
}

export default SearchBar;
