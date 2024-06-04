/* eslint-disable */
import './projectList.css';
import PublicSidebar from "../UserPublic/PublicSidebar";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


function ProjectListBody() {
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

                    <div className="side-allschool">
                        <Link to="/" className="sidebar-logo">
                            <img className="sidebar-logo-img" src="/resources2/img/logo.png" alt="인스타 로고"/>
                        </Link>
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
                            <div className="project-arrow-container">
                            <span className="project-arrow">{projectExpanded ? 'v' : '+'}</span>
                            </div>
                        </div>
                        {projectExpanded && (
                            <div className="expanded-content">
                                <Link to="/projectList" className="sidebar-link">
                                    <span className="link-text-a">지원 내역</span>
                                </Link>
                                <Link to="/favoriteProjects" className="sidebar-link">
                                    <span className="link-text-b">관심 프로젝트</span>
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

            <div className="project-card-container">

                <div className="project-header-text">
                    <h3>프로젝트 목록</h3>
                </div>
            </div>
            <div className="project-seach">
                    <span className="project-seach-box">
                    <input type="search" className="pj-search" placeholder="검색"/>
                  </span>
                <button className="project-seach-button">검색 <img className="project-magnifier"
                                                                 src="/resources2/img/magnifier.png" alt="검색버튼"/>
                </button>
                <button className="project-dontsee">지원한 프로젝트</button>

            </div>


            <div className="cards-container">

                <div className="project-card">
                    <div className="project-header">

                        <span className="project-title">주제 : ~~</span>
                        <div className="project-bookmark">
                            <img className="project-bookmark-image" src="/resources2/img/bookmark.png" alt="공유"/>
                        </div>
                    </div>


                    <div className="project-body">
                        <div className="project-info">
                            <p>대표 : 주승재</p>
                            <p>*******과</p>
                            <p>기간 : <span className="bold-text">2024/03/01 ~2024/05/01</span></p>
                            <p>인원수 : 5</p>
                            <div className="team-icons">
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>개요 : ~~~</p>
                            <p className="project-end">마감 기한 5일전</p>
                            <button className="request-button">요청하기</button>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-header">

                        <span className="project-title">주제 : ~~</span>
                        <div className="project-bookmark">
                            <img className="project-bookmark-image" src="/resources2/img/bookmark.png" alt="공유"/>

                        </div>
                    </div>


                    <div className="project-body">
                        <div className="project-info">
                            <p>대표 : 주승재</p>
                            <p>*******과</p>
                            <p>기간 : <span className="bold-text">2024/03/01 ~2024/05/01</span></p>
                            <p>인원수 : 5</p>
                            <div className="team-icons">
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>개요 : ~~~</p>
                            <p className="project-end">마감 기한 5일전</p>
                            <button className="request-button">요청하기</button>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-header">

                        <span className="project-title">주제 : ~~</span>
                        <div className="project-bookmark">
                            <img className="project-bookmark-image" src="/resources2/img/bookmark.png" alt="공유"/>
                        </div>
                    </div>


                    <div className="project-body">
                        <div className="project-info">
                            <p>대표 : 주승재</p>
                            <p>*******과</p>
                            <p>기간 : <span className="bold-text">2024/03/01 ~2024/05/01</span></p>
                            <p>인원수 : 5</p>
                            <div className="team-icons">
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                                <div className="icon"/>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>개요 : ~~~</p>
                            <p className="project-end">마감 기한 5일전</p>
                            <button className="request-button">요청하기</button>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">

                        <span className="project-title">주제 : 프로젝트 2</span>
                        <div className="project-bookmark">
                            <img className="project-bookmark-image" src="/resources2/img/bookmark.png" alt="공유"/>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-info">
                            <p>대표 : 이승환</p>
                            <p>*******과</p>
                            <p>기간 : <span className="bold-text">2024/04/01 ~2024/06/01</span></p>
                            <p>인원수 : 6</p>
                            <div className="team-icons">
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>개요 : 프로젝트 2의 개요</p>
                            <button className="request-button-sucess">지원 완료</button>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">

                        <span className="project-title">주제 : 프로젝트 2</span>
                        <div className="project-bookmark">
                            <img className="project-bookmark-image" src="/resources2/img/bookmark.png" alt="공유"/>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-info">
                            <p>대표 : 이승환</p>
                            <p>*******과</p>
                            <p>기간 : <span className="bold-text">2024/04/01 ~2024/06/01</span></p>
                            <p>인원수 : 6</p>
                            <div className="team-icons">
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>개요 : 프로젝트 2의 개요</p>
                            <button className="request-button">요청하기</button>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">

                        <span className="project-title">주제 : 프로젝트 2</span>
                        <div className="project-bookmark">
                            <img className="project-bookmark-image" src="/resources2/img/bookmark.png" alt="공유"/>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-info">
                            <p>대표 : 이승환</p>
                            <p>*******과</p>
                            <p>기간 : <span className="bold-text">2024/04/01 ~2024/06/01</span></p>
                            <p>인원수 : 6</p>
                            <div className="team-icons">
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>개요 : 프로젝트 2의 개요</p>
                            <button className="request-button">요청하기</button>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">

                        <span className="project-title">주제 : 프로젝트 2</span>
                        <div className="project-bookmark">
                            <img className="project-bookmark-image" src="/resources2/img/bookmark.png" alt="공유"/>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-info">
                            <p>대표 : 이승환</p>
                            <p>*******과</p>
                            <p>기간 : <span className="bold-text">2024/04/01 ~2024/06/01</span></p>
                            <p>인원수 : 6</p>
                            <div className="team-icons">
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>개요 : 프로젝트 2의 개요</p>
                            <button className="request-button">요청하기</button>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <span className="project-title">주제 : 프로젝트 2</span>
                        <div className="project-bookmark">
                            <img className="project-bookmark-image" src="/resources2/img/bookmark.png" alt="공유"/>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-info">
                            <p>대표 : 이승환</p>
                            <p>*******과</p>
                            <p>기간 : <span className="bold-text">2024/04/01 ~2024/06/01</span></p>
                            <p>인원수 : 6</p>
                            <div className="team-icons">
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>개요 : 프로젝트 2의 개요</p>
                            <button className="request-button">요청하기</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProjectListBody;
