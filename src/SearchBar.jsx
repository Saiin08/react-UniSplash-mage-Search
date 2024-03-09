import key from "../key";
import "./SearchBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ setSearchResult }) {
  const [searchQuery, setSearchQuery] = useState("");

  const loadData = async () => {
    // if search query is empty, do not do anything
    if (!searchQuery) {
      return;
    }
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=" + ${searchQuery} + "&client_id=${key.unsplashAccessKey}`
    );

    const data = await response.json();
    setSearchResult(data.results);
    console.log(data);
  };

  // useEffect(() => {
  //   loadData();
  // }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClick = () => {
    loadData();
  };

  return (
    <div className="search_bar">
      <input
        className="input"
        type="text"
        placeholder="🔍 search for photo "
        value={searchQuery}
        onChange={handleChange}
      />
      &nbsp;
      <button className="search" onClick={handleClick}>
        <Link to={"/search/" + searchQuery} className="search_btn">
          Search
        </Link>
      </button>
    </div>
  );
}
