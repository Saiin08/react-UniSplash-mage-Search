import Header from "./Header";
import SearchBar from "./SearchBar";
// import SearchResult from "./SearchResult";
// import { useState } from "react";

export default function Homepage({ setSearchResult }) {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="search">
      <Header />
      <SearchBar setSearchResult={setSearchResult} />

      {/* <SearchResult searchResult={searchResult} /> */}
    </div>
  );
}
