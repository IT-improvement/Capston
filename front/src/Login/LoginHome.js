/* eslint-disable */
import "./login.css"
import {Link} from "react-router-dom";


function LoginHome() {
    return (
        <div className="login-body">
            <div className="login-container">
                <div className="login-header">
                <img className="login-img" src="/resources2/img/logo.png" alt="Logo"/>
                <h1 className="login-h1">로그인</h1>
                </div>
                <div className="login-input-group">
                    <input type="email" className="login-input" placeholder="이메일 입력" required/>
                </div>
                <div className="login-input-group">
                    <input type="password" className="login-input" placeholder="비밀번호 입력" required/>
                    <a className="login-id" href="#">아이디 / 비밀번호 찾기</a>
                </div>
                <div className="login-button-group">
                    <Link to="/join">
                    <button className="login-sign">회원 가입</button>
                    </Link>
                 <Link to="/">
                    <button className="btn-sucess">로그인</button>
                 </Link>
                </div>
            </div>
        </div>
    )
        ;
}

export default LoginHome;
