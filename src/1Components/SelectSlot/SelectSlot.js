import "./SelectSlot.css"

export default function InputSlot({placeholder,...props}) {
    const {type, name, array, style, ...rest} = props;
    return (
        <div className="input" style={style}>
            <label htmlFor={name} {...rest}>
                {placeholder}
            </label>
            <select name={name} {...rest}>
              {array.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}
            </select>
        </div>
    );
  }
  
  