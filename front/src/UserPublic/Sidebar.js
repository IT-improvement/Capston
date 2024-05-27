/* eslint-disable */
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
    const [hovered, setHovered] = useState(false);

    return (
            <div className={`container ${hovered ? 'sidebar-hovered' : ''}`}>
                <div className="sidebar" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className="allschool">
                        <Link to="/allSchoolNotice" className="sidebar-link">
                            <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/school-building.png"
                                 alt="school-building"/>
                            <span className="link-text"> 전체 대학교 게시글</span>
                        </Link>
                        <Link to="/myschool" className="sidebar-link">
                            <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/noticeboard.png"
                                 alt="noticeboard"/>
                            <span className="link-text"> 우리 학교 게시글</span>
                        </Link>
                        <Link to="" className="sidebar-link">
                            <img width="48" height="48"
                                 src="https://img.icons8.com/pulsar-color/48/collaborating-in-circle.png"
                                 alt="project"/>
                            <span className="link-text"> 프로젝트</span>
                        </Link>

                        <Link to="" className="sidebar-link">
                            <img width="48" height="48"
                                 src="https://img.icons8.com/pulsar-color/48/chat-message-sent.png"
                                 alt="chat-message-sent"/>
                            <span className="link-text"> 채팅</span>
                        </Link>

                        <Link to="" className="sidebar-link">
                            <img width="48" height="48"
                                 src="https://img.icons8.com/pulsar-color/48/000000/edit-calendar.png"
                                 alt="edit-calendar"/>
                            <span className="link-text"> 달력</span>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar;