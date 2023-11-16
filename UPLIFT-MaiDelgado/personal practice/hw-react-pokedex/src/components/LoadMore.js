import React from "react";
import "./Main.css";

export const LoadMore = ({ getPokemons }) => {
  return (
    <div>
      <div className="btn">
        <button className="load-btn" onClick={() => getPokemons()}>
          Load more
        </button>
      </div>
    </div>
  );
};