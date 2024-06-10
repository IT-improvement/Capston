/* eslint-disable */

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PublicSidebar from "../UserPublic/PublicSidebar";
import Aside from "./Aside";

function Body() {
    const [hovered, setHovered] = useState(false);
    const [projectExpanded, setProjectExpanded] = useState(false);

    const toggleProjectExpand = () => {
        setProjectExpanded(!projectExpanded);
    };

    // 마우스를 떼면 자동으로 프로젝트 접힘
    useEffect(() => {
        if (!hovered) {
            setProjectExpanded(false);
        }
    }, [hovered]);


    return (
        <div>

            <div className="main_container">
                <div className="main_body_iframe">
                    <iframe title="main_body" src="/main_body_content" className="iframe"></iframe>
                </div>
                <div className="additional_line_iframe">
                    <iframe title="additional_line" src="/additional_line_content" className="iframe"></iframe>
                </div>
                <Aside/>
            </div>
        </div>
    );
}

export default Body;