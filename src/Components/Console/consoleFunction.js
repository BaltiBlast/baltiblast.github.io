export function generateConsoleValue(display, direction, wrap, justify, align) {
  const consoleValue = [
    {
      value: display,
      text: "display",
      style: "console__fake-css-p",
      key: 1
    },
    {
      value: direction,
      text: "flex-direction",
      style: "console__fake-css-p",
      key: 2
    },
    {
      value: wrap,
      text: "flex-wrap",
      style: "console__fake-css-p",
      key: 3
    },
    {
      value: justify,
      text: "justify-content",
      style: "console__fake-css-p",
      key: 4
    },
    {
      value: align,
      text: "align-items",
      style: "console__fake-css-p",
      key: 5
    }
  ];

  return (
    <>
      <p>{`.container {`}</p>
      {consoleValue.map((_v) => {
        if (_v.value === "") {
          return "";
        } else {
          return (
            <p key={_v.key} className={_v.style}>
              {_v.text} : {_v.value}
            </p>
          );
        }
      })}
      <p>{`}`}</p>
    </>
  );
}
