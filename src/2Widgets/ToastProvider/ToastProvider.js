import { useMemo, useState } from "react";
import Toast from "../../1Components/Toasts/Toast";
import { ToastContext } from "./ToastContext";
import "./ToastProvider.css"

export default function ToastProvider({children})
{
    const [toasts, setToasts] = useState([]);

    function openToast(message,header) {
        const newToast = {
            id : Date.now(),
            message: message,
            header: header
        }
        setToasts((previousToast) => [...previousToast, newToast]);
    }

    function closeToast(id)
    {
        setToasts((previousToast) => previousToast.filter(toast => toast.id !== id));
    }

    const contextValue = useMemo(() => ({
        open: openToast,
        close : closeToast
    }),[])
   return(
    <ToastContext.Provider value={contextValue}>
        {children}
        <div className="toast_provider">
            {toasts && toasts.map(toast => { return(
                <Toast key={toast.id} header={toast.header} message={toast.message} close={() => closeToast(toast.id)}/>
            )})}
        </div>
    </ToastContext.Provider>
   ); 
}