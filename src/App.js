// -- REACT IMPORT -- //
import { useState } from "react";

// -- COMPONENTS IMPORT -- //
import SideBar from "./Components/SideBar/SideBar";
import SquareContainer from "./Components/SquareContainer/SquareContainer";
import Console from "./Components/Console/Console";

const App = () => {
  // -- VALUE NUMBER SQUARES GENERATED -- //
  const [squareNumber, setSquareNumber] = useState(3);

  // -- VALUE SELECTED STYLE -- //
  const [displaySelected, setDisplaySelected] = useState("");
  const [flexDirection, setFlexDirection] = useState("");
  const [flexWrap, setFlexWrap] = useState("");
  const [justifyContent, setJustifyContent] = useState("");
  const [alignContent, setAlignContent] = useState("");

  // -- OBJECT FLEXBOX STYLE -- //
  const objectStyle = {
    display: displaySelected,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    justifyContent: justifyContent,
    alignItems: alignContent
  };

  // -- SIDEBARS'S PROPS -- //
  const sideBarProps = {
    squareNumber: squareNumber,
    setSquareNumber: setSquareNumber,
    setDisplaySelected: setDisplaySelected,
    setFlexWrap: setFlexWrap,
    setFlexDirection: setFlexDirection,
    setJustifyContent: setJustifyContent,
    setAlignContent: setAlignContent
  };

  // -- SQUARE CONTAINER'S PROPS -- //
  const squareContainerProps = {
    squareNumber: squareNumber,
    objectStyle
  };

  // -- CONSOLE'S PROPS -- //
  const consoleProps = {
    squareNumber: squareNumber,
    objectStyle,
    displaySelected: displaySelected
  };

  return (
    <div className="app">
      <SideBar {...sideBarProps} />
      <SquareContainer {...squareContainerProps} />
      <Console {...consoleProps} />
    </div>
  );
};

export default App;
