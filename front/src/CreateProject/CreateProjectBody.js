/* eslint-disable */
import React, { useState } from "react";
import "./createProjectBody.css";
import { Link } from "react-router-dom";

function CreateProjectBody() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState({
        start: "시작날짜",
        end: "마감날짜"
    });

    const handleCalendarClick = () => {
        setShowCalendar(true);
    };

    const handleDateSelect = (start, end) => {
        setSelectedDate({ start, end });
        setShowCalendar(false);
    };

    const handleCancel = () => {
        setShowCalendar(false);
    };

    return (
        <div className="create-project-body">
            {showCalendar && (
                <div className="calendar-modal-overlay">
                    <div className="calendar-modal">
                        <h2>날짜 선택</h2>
                        <p>예상 개발 기간을 선택하세요:</p>
                        <input
                            type="date"
                            className="calendar-input"
                            value={selectedDate.start}
                            onChange={(e) => setSelectedDate({ ...selectedDate, start: e.target.value })}
                        />
                        <input
                            type="date"
                            className="calendar-input"
                            value={selectedDate.end}
                            onChange={(e) => setSelectedDate({ ...selectedDate, end: e.target.value })}
                        />
                        <button onClick={() => handleDateSelect(selectedDate.start, selectedDate.end)}>확인</button>
                        <button onClick={handleCancel}>취소</button>
                    </div>
                </div>
            )}
            <div className="project-creation-body">
                <div className="project-creation-container">
                    <h1 className="project-creation-title">프로젝트 모집 작성</h1>
                    <div className="create-project-info">
                        <p>방장: <span className="create-project-leader">주승재</span></p>
                        <p className="create-name-container">프로젝트 명: <textarea className="create-project-name">*****프로젝트</textarea></p>
                        <div className="create-project-dates" >
                            <p>프로젝트 예상 개발 기간: <span
                                className="create-project-period">{selectedDate.start} - {selectedDate.end}</span></p>
                            <img width="50" height="50" onClick={handleCalendarClick}
                                 src="https://img.icons8.com/pulsar-color/48/000000/edit-calendar.png" alt="달력"/>
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
                        <Link to="/projectList">
                            <button className="cancel-button">취소</button>
                        </Link>
                        <Link to="/projectList">
                            <button className="confirm-button">확인</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProjectBody;
