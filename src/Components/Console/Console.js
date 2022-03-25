// -- FUNCTION IMPORT -- //
import { generateConsoleValue } from "./consoleFunction";

// -- STYLE IMPORT -- //
import "./console.css";

const Console = (props) => {
  const { displaySelected, objectStyle } = props;
  const { flexDirection, flexWrap, justifyContent, alignItems } = objectStyle;

  return (
    <div className="console">
      <div>
        {generateConsoleValue(
          displaySelected,
          flexDirection,
          flexWrap,
          justifyContent,
          alignItems
        )}
      </div>
    </div>
  );
};

export default Console;
