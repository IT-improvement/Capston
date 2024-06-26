/* eslint-disable */


import LoginHome from "./LoginHome";

import {useEffect} from "react";

function Login() {
        useEffect(() => {
            // 스크립트를 동적으로 생성하여 body에 추가
            addScript(`${process.env.PUBLIC_URL}/resources/js/setting.js`);
            addScript(`${process.env.PUBLIC_URL}/resources/js/plugin.js`);
            addScript(`${process.env.PUBLIC_URL}/resources/js/template.js`);
            addScript(`${process.env.PUBLIC_URL}/resources/js/common.js`);
            addScript(`${process.env.PUBLIC_URL}/resources/js/script.js`);
        }, []);

    // 스크립트를 추가하는 함수
    const addScript = (src) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        // body에 추가
        document.body.appendChild(script);
    };
    return (
        <div>
            <LoginHome/>
        </div>
    );
}

export default Login;
