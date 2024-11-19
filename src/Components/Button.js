export default function Button({OnClickHandler, text}) {
  return (
      <button className="button" onClick={OnClickHandler}>
        {text}
      </button>
  );
}