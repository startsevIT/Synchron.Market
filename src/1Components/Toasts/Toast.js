import { useEffect, useRef } from "react";
import "./Toasts.css"

function useTimeout(callbackFunction)
{
    const savedCallback = useRef(callbackFunction);
    useEffect(() => {
        savedCallback.current = callbackFunction;
    },[callbackFunction]);

    useEffect(() => {
        const functionId = setTimeout(() => savedCallback.current(), 3000);

        return () => clearTimeout(functionId);
    },[]);
}

export default function Toast({header, message, close})
{
    useTimeout(() => {close();});
    return(
    <div className="toast">
        <h3>
            {header}
        </h3>
        <p>
            {message}
        </p>
        <button onClick={close}>
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>
    </div>
    );
}