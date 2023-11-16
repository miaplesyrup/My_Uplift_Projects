const Player = (props) => {
  return (
    <div>
      <p>{props.playerName}</p>
      <p>{props.playerNumber}</p>
    </div>
  );
};

export default Player;
