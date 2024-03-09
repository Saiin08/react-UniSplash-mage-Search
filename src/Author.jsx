import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import key from "../key";
import "./Author.css";
import Header from "./Header";

export default function Author() {
  const { user } = useParams();
  const [author, setAuthor] = useState("");

  const loadAuthor = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${user}?client_id=${key.unsplashAccessKey}`
    );

    const data = await response.json();
    console.log(data);
    setAuthor(data);
  };

  useEffect(() => {
    loadAuthor();
  }, [user]);

  return (
    <>
      <Header />
      {author ? (
        <div className="author_container">
          <img src={author.profile_image.large} alt="author" />
          <h3>{author.name}</h3>
          <p>
            {author.followers_count} &nbsp; followers &nbsp;| &nbsp;
            {author.following_count} &nbsp; following
          </p>
          <p>Bio: &nbsp; {author.bio}</p>
          <p>photo downloads: {author.downloads}</p>
          <div className="photos_box">
            <strong>Photos:</strong>
            <div className="photo">
              <img
                className="author_img"
                src={author.photos[0].urls.regular}
                alt=""
              />
              <img
                className="author_img"
                src={author.photos[1].urls.regular}
                alt=""
              />
              <img
                className="author_img"
                src={author.photos[2].urls.regular}
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}
