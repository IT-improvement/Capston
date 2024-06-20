/* eslint-disable */

import React, { useState } from "react";
import { FaBars, FaEnvelope, FaFlag } from 'react-icons/fa'; // 아이콘 가져오기
import "./aside.css";

function Aside() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`custom-sidebar ${isOpen ? "custom-sidebar-open" : ""}`}>
            <button onClick={toggleSidebar} className="custom-sidebar-toggle-button">
                <FaBars className="custom-sidebar-menu-icon" />
            </button>
            {isOpen && (
                <aside className="custom-sidebar-content">
                    <div className="custom-sidebar-feed_right_container">
                        <div className="aside_empty_box"></div>
                        <div className="custom-sidebar-recommendation_box">
                            <div className="custom-sidebar-recommendation">친구 목록</div>
                            <div className="custom-sidebar-comment">모두 보기</div>
                            <div className="custom-sidebar-comment">접속중인 친구만 보기</div>
                        </div>
                        <div className="custom-sidebar-my_profile">
                            <div className="custom-sidebar-profile_none">
                                <div className="custom-sidebar-my_profile_box1">
                                    <img src="/resources2/img/user.png" alt="내 프로필"/>
                                    <div className="custom-sidebar-status online"></div>
                                </div>
                                <div className="custom-sidebar-my_profile_id">s_sewon</div>
                            </div>
                        </div>
                        <div className="custom-sidebar-users">
                            {["bubugym", "jj.www", "choco1", "aaawww11", "lalahihi123"].map((user, index) => (
                                <div className="custom-sidebar-user" key={index}>
                                    <div className="custom-sidebar-my_profile_box2">
                                        <img src="/resources2/img/user.png" alt="내 프로필"/>
                                        <div className={`custom-sidebar-status ${index % 2 === 0 ? 'online' : ''}`}></div>
                                    </div>
                                    <div className="custom-sidebar-my_profile_main_box">
                                        <div className="custom-sidebar-my_profile_id_box">
                                            <div className="custom-sidebar-my_profile_id1">{user}</div>
                                        </div>
                                        <div className="custom-sidebar-icons">
                                            <FaEnvelope className="custom-sidebar-message-icon" />
                                            <FaFlag className="custom-sidebar-report-icon" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            )}
        </div>
    );
}

export default Aside;
