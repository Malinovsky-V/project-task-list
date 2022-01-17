import "./MySelect.css";

export default function MySelect({
  options,
  defaultValue,
  value,
  setMethod,
  emptyField,
}) {
  const selectedHandler = (e) => {
    setMethod(e.target.value);
  };
  return (
    <select
      className={`mySelect ${emptyField} `}
      value={value || defaultValue}
      onChange={selectedHandler}
    >
      <option disabled={true} value={defaultValue}>
        {" "}
        {defaultValue}{" "}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
