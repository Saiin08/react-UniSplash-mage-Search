import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Author from "./Author";
import Searchpage from "./Searchpage";
import { useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage setSearchResult={setSearchResult} />}
          />

          <Route path="/author/:user" element={<Author />} />

          <Route
            path="/search/:name"
            element={<Searchpage searchResult={searchResult} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
