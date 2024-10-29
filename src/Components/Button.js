export default function Button({OnClickHandler, text}) {
  return (
    <div>
      <button 
      className="button"
      onClick={OnClickHandler}>
        {text}
      </button>
    </div>
  );
}