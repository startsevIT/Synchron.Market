import "./InputSlot.css"

export default function InputSlot({placeholder,...props}) {
    const {type, name, ...rest} = props;
    return (
        <div className="input">
            <label htmlFor={name}>
                {placeholder}
            </label>
            <input 
            name={name}
            type={type || "text"}
            {...rest}/>
        </div>
    );
  }
  
  