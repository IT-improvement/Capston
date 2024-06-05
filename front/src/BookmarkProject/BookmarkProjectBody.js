import React from 'react';
import "./bookmarkProject.css";
import PublicSidebar from "../UserPublic/PublicSidebar";


function BookmarkProjectBody() {
    return (
        <div>
            <PublicSidebar/>
            <div className="bookmarkProject-container">
                <div className="project">

                    <img src="/resources2/img/다운로드.jpg" alt="Coding Engine"/>
                    <div className="bookmarkProject-project-info">
                        <div className="bookmarkProject-header">
                        <h2>프로젝트 명 : ~~프로젝트</h2>
                        <button className="bookmarkProject-apply-button">지원하기</button>
                        </div>
                        <p>프로젝트 대표 : 주승재</p>
                        <p>기간 : 2024/03/01 - 2024/05/01</p>
                        <p className="bookmarkProject-important">모집기간 : D-3</p>
                        <p>인원수 : 20</p>

                    </div>
                    <p className="bookmarkProject-project-description">대표가 하는말 : 이번에 제가 졸업 학번인데 그전에 좋은 프로젝트 하나 만들고 싶습니다.
                        저와 같이 몰입하거나 열심히
                        하고싶은 사람만
                        모집해주세요!</p>
                    <p className="warning">모집 인원이 다 차면 자동으로 마감 됩니다! 마감되기전에 얼른 지원 하세요!</p>
                </div>
                <div className="scrapped-projects">
                    <h2 className="bookmarkProject-h2">내가 스크랩한 프로젝트</h2>
                    <div className="scrapped-project">
                        <p>주제 : ~~</p>
                        <p>기간 : 2024/03/01 - 2024/05/01</p>
                        <p>인원수 : 4</p>
                        <button className="view-button">상세보기</button>
                    </div>
                    <div className="scrapped-project">
                        <p>주제 : ~~</p>
                        <p>기간 : 2024/03/01 - 2024/05/01</p>
                        <p>인원수 : 3</p>
                        <button className="view-button">상세보기</button>
                    </div>
                    <div className="scrapped-project">
                        <p>주제 : ~~</p>
                        <p>기간 : 2024/03/01 - 2024/05/01</p>
                        <p>인원수 : 5</p>
                        <button className="view-button">상세보기</button>
                    </div>
                    <div className="scrapped-project">
                        <p>주제 : ~~</p>
                        <p>기간 : 2024/03/01 - 2024/05/01</p>
                        <p>인원수 : 5</p>
                        <button className="view-button">상세보기</button>
                    </div>

                    <div className="pagination">
                        <button className="page-button">1</button>
                        <button className="page-button">2</button>
                        <button className="page-button">3</button>
                        <button className="page-button">4</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookmarkProjectBody;



