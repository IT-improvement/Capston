/* eslint-disable */

import {useState} from "react";
import {Link} from "react-router-dom";

function Body() {
    const [hovered, setHovered] = useState(false);

    return (
        <div>
            <div className="icon-container" >
                <div className="allschool">
                    <Link to="/allSchoolNotice" className=" ">
                    <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/school-building.png"
                         alt="school-building"/></Link>
                    <Link to="/myschool">
                    <img className="myschool" width="48" height="48" src="https://img.icons8.com/pulsar-color/48/noticeboard.png"
                         alt="noticeboard"/></Link>
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