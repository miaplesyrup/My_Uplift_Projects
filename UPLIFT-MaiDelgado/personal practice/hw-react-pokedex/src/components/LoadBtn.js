export const LoadBtn = ({ loadPokemons }) => {
    return (
      <div>
        <div className="btn">
          <button className="load-btn" onClick={loadPokemons}>
            Load more
          </button>
        </div>
      </div>
    );
  };