export default function InputSlot(props) {
    const {placeholder, errorMessage, error = false, type, ...rest} = props;
    return (
        <div 
        style={{
            display:"flex",
            flexDirection: "column",
            gap: "1vh"
        }}>
            <div>
                <label 
                style={{ 
                    color: "#2C3950B2",
                }}>
                    {placeholder}
                </label>
            </div>
            <div>
                <input 
                autoComplete="off"
                data-error={error}
                type={type || "text"}
                {...rest}
                style={{
                    fontSize: "2vh",
                    width: "100%",
                    height: "4vh",
                    border: "1px solid #2C39504D",
                    borderRadius: "2px",
                    }}/>
            </div>
            <p 
            data-error={error}>
                {errorMessage}
            </p>
            <style>
                {`.input_error {
                    display : none;
                    
                    &[data-error="true" ] {
                        display : block;
                    }
                `}
            </style>
        </div>
    );
  }
  
  