// -- FUNCTION IMPORT -- //
import { selectGeneratorSideBar } from "./sideBarFunction";

// -- STYLE IMPORT -- //
import "./sidebar.css";

const SideBar = (props) => {
  const {
    setDisplaySelected,
    setFlexDirection,
    setFlexWrap,
    setJustifyContent,
    setAlignContent,
    squareNumber,
    setSquareNumber
  } = props;

  return (
    <div className="sidebar">
      <div className="sidebar__input-container">
        <p>Nombre de blocs : {squareNumber}</p>
        <input
          onChange={(e) => setSquareNumber(e.target.value)}
          type="range"
          min="1"
          max="20"
          value={squareNumber}
          className="sidebar__input-range"
        />
      </div>

      {selectGeneratorSideBar(
        setDisplaySelected,
        setFlexDirection,
        setFlexWrap,
        setJustifyContent,
        setAlignContent
      )}
    </div>
  );
};

export default SideBar;
