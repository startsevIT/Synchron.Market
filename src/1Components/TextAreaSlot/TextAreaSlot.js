import "./TextAreaSlot.css"

export default function InputSlot({placeholder,...props}) {
    const {type, ...rest} = props;
    return (
        <div className="input">
            <label>
                {placeholder}
            </label>
            <textarea 
            type={type || "text"}
            {...rest}></textarea>
        </div>
    );
  }
  
  