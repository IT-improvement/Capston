/* eslint-disable */

function SignUpBody() {
    return (
        <div>
            <main className="th-layout-main ">
                {/* [S]opilsol-N31 */}
                <div className="opilsol-N31" data-bid="rWlVJ5IYZp">
                    <div className="content-container">
                        <div className="textset content-top">
                            <div className="container-md">
                                <h2 className="textset-tit">회원가입</h2>
                                <ul className="step-list">
                                    <li>약관동의</li>
                                    <li className="active">정보입력</li>
                                    <li>가입완료</li>
                                </ul>
                            </div>
                        </div>
                        <div className="contents-form">
                            <div className="container-md">
                                <div className="contents-form-top">
                                    <h3 className="inputset-tit">정보입력</h3>
                                </div>
                                <div className="inputset inputset-lg inputset-group">
                                    <label className="inputset-label" htmlFor="Id">아이디 </label>
                                    <input type="text" className="inputset-input form-control" id="Id"/>
                                </div>
                                <div className="inputset inputset-lg inputset-group">
                                    <label className="inputset-label" htmlFor="Pw">비밀번호</label>
                                    <input type="text" className="inputset-input form-control" id="Pw"/>
                                </div>
                                <div className="inputset inputset-lg inputset-group" htmlFor="PwCh">
                                    <label className="inputset-label">비밀번호 확인 </label>
                                    <input type="text" className="inputset-input form-control" id="PwCh"/>
                                </div>
                                <div className="inputset inputset-lg inputset-group" htmlFor="Name">
                                    <label className="inputset-label">이름</label>
                                    <input type="text" className="inputset-input form-control" id="Name"/>
                                </div>
                                <div className="inputset inputset-lg inputset-group" htmlFor="Mobile">
                                    <label className="inputset-label">휴대폰번호</label>
                                    <input type="text" className="inputset-input form-control" id="Mobile"/>
                                </div>
                                <div className="inputset inputset-lg inputset-group" htmlFor="Email">
                                    <label className="inputset-label">이메일</label>
                                    <input type="text" className="inputset-input form-control" id="Email"/>
                                    <span className="at">@</span>
                                    <div className="selectset selectset-lg">
                                        <button className="selectset-toggle btn" type="button">
                                            <span>선택해주세요</span>
                                        </button>
                                        <ul className="selectset-list">
                                            <li className="selectset-item">
                                                <button className="selectset-link btn" type="button"
                                                        data-value="선택해주세요">
                                                    <span>선택해주세요</span>
                                                </button>
                                            </li>
                                            <li className="selectset-item">
                                                <button className="selectset-link btn" type="button"
                                                        data-value="naver.com">
                                                    <span>naver.com</span>
                                                </button>
                                            </li>
                                            <li className="selectset-item">
                                                <button className="selectset-link btn" type="button"
                                                        data-value="gmail.com">
                                                    <span>gmail.com</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="inputset inputset-lg inputset-group">
                                    <label className="inputset-label"/>
                                    <div className="checkset checkset-sm">
                                        <input id="checkset-c-6-1" className="checkset-input input-round"
                                               type="checkbox" defaultValue defaultChecked/>
                                        <label className="checkset-label" htmlFor="checkset-c-6-1"/>
                                        <span className="checkset-text">정보성 메일에 동의합니다</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-btn">
                                <button className="btnset btnset-lg btnset-dark btnset-rect">취소</button>
                                <button className="btnset btnset-lg btnset-rect">회원가입</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [E]opilsol-N31 */}
            </main>

        </div>
    );
}

export default SignUpBody;
