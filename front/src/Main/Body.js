/* eslint-disable */

import {useState} from "react";
import {Link} from "react-router-dom";

function Body() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`container ${hovered ? 'sidebar-hovered' : ''}`}>
            <div className="sidebar" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="allschool">
                    <Link to="/allSchoolNotice" className="sidebar-link">
                        <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/school-building.png"
                             alt="school-building"/>
                        <span className="link-text">전체 대학교 게시글</span>
                    </Link>
                    <Link to="/myschool" className="sidebar-link">
                        <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/noticeboard.png"
                             alt="noticeboard"/>
                        <span className="link-text">우리 학교 게시글</span>
                    </Link>
                </div>
            </div>
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