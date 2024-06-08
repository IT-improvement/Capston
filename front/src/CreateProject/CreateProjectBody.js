/* eslint-disable */
import "./createProjectBody.css";

function CreateProjectBody() {
    return (
        <div className="create-project-body">
        <div className="project-creation-body">
            <div className="project-creation-container">
                <h1 className="project-creation-title">프로젝트 모집 작성</h1>
                <div className="create-project-info">
                    <p>방장: <span className="create-project-leader">주승재</span></p>
                    <p>프로젝트 명: <span className="create-project-name">*****프로젝트</span></p>
                    <div className="create-project-dates">
                        <img width="50" height="50"
                             src="https://img.icons8.com/pulsar-color/48/000000/edit-calendar.png" alt="달력"/>
                        <p>프로젝트 예상 개발 기간: <span className="create-project-period">2024/03/01 - 2024/04/01</span></p>
                    </div>
                    <div className="project-members">
                        <p>인원 지정:</p>
                        <img src="/resources2/img/user.png" alt="인원 아이콘" className="member-icon" />
                        <img src="/resources2/img/user.png" alt="인원 아이콘" className="member-icon"/>
                        <img src="/resources2/img/user.png" alt="인원 아이콘" className="member-icon"/>
                        <img src="/resources2/img/user.png" alt="인원 아이콘" className="member-icon"/>
                    </div>
                </div>
                <textarea className="create-project-description" placeholder="프로젝트 개발 개요"></textarea>
                <div className="create-button-group">
                    <button className="cancel-button">취소</button>
                    <button className="confirm-button">확인</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CreateProjectBody;