import "./MainButton.css"

export default function Button({OnClickHandler, text}) {
  return (
      <button onClick={OnClickHandler} className="main_button">
        {text}
      </button>
  );
}
