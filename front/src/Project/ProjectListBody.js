/* eslint-disable */
import './projectList.css';
import PublicSidebar from "../UserPublic/PublicSidebar";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {CiBookmark} from "react-icons/ci";


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
            <PublicSidebar/>
            <div className="project-card-container">

                <div className="project-header-text">
                    <h3>프로젝트 목록</h3>
                </div>
            </div>
            <div className="project-seach">
                <div className="project-create-container">
                    <Link to="/createProject">
                <button className="project-create">프로젝트 공고 작성</button>
                    </Link>
                </div>
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
                            <CiBookmark />
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
                            <p className="project-d-day-end">마감 완료</p>
                            <button className="end-request-button">마감</button>
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
