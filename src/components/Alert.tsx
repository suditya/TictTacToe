const Alert = (props) => {
  return (
    <div className="alert-wrapper">
      {props.won === null ? (
        <p>Game Drawn!</p>
      ) : props.won === "X" ? (
        <p>Player 1 won!</p>
      ) : (
        <p>Player 2 won!</p>
      )}
    </div>
  );
};

export default Alert;
