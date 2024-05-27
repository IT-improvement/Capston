/* eslint-disable */

import {useState} from "react";
import {Link} from "react-router-dom";
import PublicSidebar from "../UserPublic/PublicSidebar";

function Body() {

    return (
        <div>
            <PublicSidebar/>
            <div className="main_container">
                <div className="main_body_iframe">
                    <iframe title="main_body" src="/main_body_content" className="iframe"></iframe>
                </div>
                <div className="additional_line_iframe">
                    <iframe title="additional_line" src="/additional_line_content" className="iframe"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Body;