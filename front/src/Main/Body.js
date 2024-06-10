/* eslint-disable */

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PublicSidebar from "../UserPublic/PublicSidebar";

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
            <div className={`container ${hovered ? 'sidebar-hovered' : ''}`}>
                <div className="sidebar" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

                    <div className="allschool">

                        <Link to="/" className="sidebar-link">
                            <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/school-building.png"
                                 alt="홈"/>
                            <span className="link-text"> 홈</span>
                        </Link>
                        <Link to="/mypage" className="sidebar-link">
                            <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/noticeboard.png"
                                 alt="내 페이지"/>
                            <span className="link-text"> 내 페이지</span>
                        </Link>
                        <div className="sidebar-link project-link" onClick={toggleProjectExpand}>
                            <img width="48" height="48"
                                 src="https://img.icons8.com/pulsar-color/48/collaborating-in-circle.png" alt="프로젝트"/>
                            <span className="link-text"> 프로젝트</span>
                        </div>
                        {projectExpanded && (
                            <div className="expanded-content">
                                <Link to="/projectList" className="sidebar-link">
                                    <span className="link-text">지원 내역</span>
                                </Link>
                                <Link to="/BookmarkProject" className="sidebar-link">
                                    <span className="link-text">관심 프로젝트</span>
                                </Link>
                            </div>
                        )}
                        <Link to="/chat" className="sidebar-link">
                            <img width="48" height="48"
                                 src="https://img.icons8.com/pulsar-color/48/chat-message-sent.png" alt="채팅"/>
                            <span className="link-text"> 채팅</span>
                        </Link>
                        <Link to="/calendar" className="sidebar-link">
                            <img width="48" height="48"
                                 src="https://img.icons8.com/pulsar-color/48/000000/edit-calendar.png" alt="달력"/>
                            <span className="link-text"> 달력</span>
                        </Link>
                    </div>
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