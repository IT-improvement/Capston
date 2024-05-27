/* eslint-disable */
import './projectList.css';
import PublicSidebar from "../UserPublic/PublicSidebar";

function ProjectListBody() {
    return (
        <div>
            <PublicSidebar/>

            <div className="project-header-text">
                <h3>프로젝트 목록</h3>
            </div>
            <div className="card-container">
                <div className="project-card">
                    <div className="project-header">
                        <input type="checkbox"/>
                        <span className="project-title">주제 : ~~</span>
                        <div className="project-bookmark"/>
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
                            <button className="request-button">요청하기</button>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <input type="checkbox"/>
                        <span className="project-title">주제 : 프로젝트 2</span>
                        <div className="project-bookmark"></div>
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
                        <input type="checkbox"/>
                        <span className="project-title">주제 : 프로젝트 2</span>
                        <div className="project-bookmark"></div>
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
                        <input type="checkbox"/>
                        <span className="project-title">주제 : 프로젝트 2</span>
                        <div className="project-bookmark"></div>
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
