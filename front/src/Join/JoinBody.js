
/* eslint-disable */
import "./join.css"
import {Link} from "react-router-dom";


function JoinBody() {
    return (
        <div className="register-body">
            <div className="register-container">
                <img className="register-img" src="/resources2/img/logo.png" alt="Logo"/>
                <h1 className="register-h1">애스타</h1>
                <p className="register-subtitle">다양한 학교 소식</p>
                <div className="register-input-group">
                    <input type="email" className="register-input" placeholder="이메일" required/>
                </div>
                <div className="register-input-group">
                    <input type="password" className="register-input" placeholder="비밀번호" required/>
                </div>
                <div className="register-input-group">
                    <input type="password" className="register-input" placeholder="비밀번호 확인" required/>
                </div>
                <div className="register-input-group">
                    <input type="text" className="register-input-half" placeholder="이름" required/>
                    <input type="text" className="register-input-half" placeholder="학교" required/>
                </div>
                <div className="register-input-group">
                    <input type="text" className="register-input-half" placeholder="과" required/>
                    <input type="text" className="register-input-half" placeholder="학년" required/>
                </div>
                <div className="register-input-group">
                    <input type="tel" className="register-input" placeholder="전화번호" required/>
                </div>
                <div className="register-button-group">
                    <Link to="/login">
                    <button className="register-submit">회원 가입</button>
                    </Link>
                </div>
            </div>
        </div>
    )
        ;
}

export default JoinBody;
