import Header from "./Header";
import SearchResult from "./SearchResult";

export default function Searchpage({ searchResult }) {
  return (
    <>
      <Header />
      <SearchResult searchResult={searchResult} />
    </>
  );
}
