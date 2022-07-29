import React, { useEffect, useState } from "react";
import axios from "axios";
import photo from "./download.jpg";

function Cards() {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    getMoviesData();
  }, []);
  const getMoviesData = async () => {
    await axios
      .get("http://localhost:4000/getMovies", {
        headers: { "Content-type": "application/json ; charset=UTF-8" },
      })
      .then((res) => {
        console.log(res.data.data);
        setMoviesData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <div style={{ margin: "0 auto" }}>
        {moviesData?.map((val, i) => (
          <div className="card">
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{val.id}</p>
              <p className="card-text">{val.name}</p>
              <p className="card-text">{val.rating}</p>
              <p className="card-text">{val.releasedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
