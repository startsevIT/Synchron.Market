import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ViewApp/App';
import ToastProvider from './2Widgets/ToastProvider/ToastProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToastProvider><App /></ToastProvider>);
