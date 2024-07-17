const InputPair = (props) => {
  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(props.id, e.target.value);
    }
  };

  return (
    <div className="input-pair">
      <label htmlFor={props.id}>{props.label}:</label>
      <br />
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.label}
        onChange={onChange}
        value={props.value}
        disabled={props.id == "id"}
      />
      <br />
    </div>
  );
};

export default InputPair;
