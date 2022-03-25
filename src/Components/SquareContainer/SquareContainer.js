// -- FUNCTION IMPORT -- //
import { squaresGenerator } from "./squareContainerFunction";

// -- STYLE IMPORT -- //
import "./squareContainer.css";

const SquareContainer = (props) => {
  return (
    <div className="square-container" style={props.objectStyle}>
      {squaresGenerator(props.squareNumber)}
    </div>
  );
};

export default SquareContainer;
