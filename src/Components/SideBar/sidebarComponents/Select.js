const Select = (props) => {
  const { divId, text, style, change, optionSelect } = props;
  return (
    <div key={divId}>
      <p>{text}</p>
      <select className={style} onChange={(e) => change(e.target.value)}>
        {optionSelect.map((_o) => (
          <option value={_o}>{_o}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
