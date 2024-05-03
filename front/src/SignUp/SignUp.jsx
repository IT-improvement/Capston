/* eslint-disable */

import SignUpFooter from "./SignUpFooter";
import SignUpBody from "./SignUpBody";
import SignUpHeader from "./SignUpHeader";
import {useEffect} from "react";


function SignUp() {
    useEffect(() => {
        // 스크립트를 동적으로 생성하여 head에 추가
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
        document.head.appendChild(script);

    };
    return (

        <div>


            <SignUpHeader/>
            <SignUpBody/>
            <SignUpFooter/>

        </div>
    );
}

export default SignUp;
