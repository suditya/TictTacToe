interface IAlert {
  won?: string;
}

const Alert = (props: IAlert) => {
  return (
    <div className="alert-wrapper">
      <h1>ALERT</h1>
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
