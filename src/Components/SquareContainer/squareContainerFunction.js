export function squaresGenerator(squarNumberValue) {
  let squareArray = [];

  for (var index = 0; index < squarNumberValue; index++) {
    let objectSquarGenerate = {
      id: index,
      styleSquare: "generated-square"
    };
    squareArray.push(objectSquarGenerate);
  }

  return (
    <>
      {squareArray.map((e) => (
        <div
          key={e.id}
          className={e.styleSquare}
          style={{ width: `${e.width}`, height: `${e.height}` }}
        >
          {e.id + 1}
        </div>
      ))}
    </>
  );
}
