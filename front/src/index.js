    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import {BrowserRouter} from "react-router-dom";
    import MyProfile from "./MyProfile/MyProfile";

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <MyProfile/>
            </React.StrictMode>
        </BrowserRouter>
    );

    reportWebVitals();
