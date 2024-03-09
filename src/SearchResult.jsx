import { Link } from "react-router-dom";
import "./SearchResult.css";
import { useState } from "react";

export default function SearchResult({ searchResult }) {
  const [size, setSize] = useState(200);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  let imgSize = {
    width: +size,
  };

  // console.log("searchResult", searchResult);
  return (
    <>
      <div className="img_range">
        <label htmlFor="size">Photo-size&nbsp;</label>
        <input
          type="range"
          id="size"
          name="size"
          min="200"
          max="800"
          onChange={handleChange}
        ></input>
      </div>
      <div className="results">
        {searchResult.map((result) => {
          return (
            <div key={result.id} className="result_box">
              <img
                style={imgSize}
                className="img"
                src={result.urls.regular}
                alt="img"
              />
              <p>by:</p>
              <p>
                {result.user.first_name}&nbsp;
                {result.user.last_name}
              </p>
              <Link to={"/author/" + result.user.username}>About author</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
