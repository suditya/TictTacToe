import "../styles/Box.css";

interface IBox {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  onClick: (idx: number) => void;
  value: number;
}

const Box = (props: IBox) => {
  const BLACK = "black";
  const WHITE = "white";
  const style = {
    borderLeftColor: BLACK,
    borderRightColor: BLACK,
    borderTopColor: BLACK,
    borderBottomColor: BLACK,
  };
  if (props.top) {
    style.borderTopColor = WHITE;
  }
  if (props.bottom) {
    style.borderBottomColor = WHITE;
  }
  if (props.left) {
    style.borderLeftColor = WHITE;
  }
  if (props.right) {
    style.borderRightColor = WHITE;
  }
  return (
    <div onClick={props.onClick} className="board-box" style={style}>
      {/* <h2>✖️</h2> */}
      <h2>{props.value}</h2>
    </div>
  );
};

export default Box;
