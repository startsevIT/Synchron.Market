export default function InputSlot(props) {
    const {placeholder, errorMessage, error = false, type, ...rest} = props;
    return (
        <div className="input">
            <label>
                {placeholder}
            </label>
            <input 
            data-error={error}
            type={type || "text"}
            {...rest}/>
        </div>
    );
  }
  
  