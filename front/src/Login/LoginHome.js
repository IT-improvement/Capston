/* eslint-disable */
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";


function LoginHome() {
    return (
        <div>
            <Helmet>
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta httpEquiv="imagetoolbar" content="no"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="format-detection" content="telephone=no"/>
                    <meta name="title" content="웹사이트"/>
                    <meta name="description" content="웹사이트입니다."/>
                    <meta name="keywords" content="키워드,키워드,키워드"/>
                    <meta property="og:title" content="웹사이트"/>
                    <meta property="og:description" content="웹사이트입니다"/>
                    <meta property="og:image" content="https://웹사이트/images/opengraph.png"/>
                    <meta property="og:url" content="https://웹사이트"/>
                    <title>로그인 | capston</title>
            </Helmet>

            <main className="th-layout-main ">
                {/* [S]opilsol-N29 */}
                <div className="opilsol-N29" data-bid="ZELvH33H83">
                    <div className="modal">
                        <div className="moadl-container">
                            <div className="modal-header textset">
                                <h2 className="textset-tit">로그인</h2>
                                <p className="textset-desc">솔루션에 오신 것을 환영합니다. <br/> 보다 나은 서비스 제공을 위해 로그인 해주세요. </p>
                            </div>
                            <div className="contents-form">
                                <div className="inputset">
                                    <input type="text" className="inputset-input form-control"
                                           placeholder="아이디를 입력해주세요." aria-label="ID"/>
                                </div>
                                <div className="inputset">
                                    <input type="password" className="inputset-input form-control"
                                           placeholder="비밀번호를 입력해주세요." aria-label="Password"/>
                                </div>
                                <div className="contents-checkset">
                                    <div className="checkset">
                                        <input id="checkset-c-6-1" className="checkset-input input-round"
                                               type="checkbox" defaultValue defaultChecked/>
                                        <label className="checkset-label" htmlFor="checkset-c-6-1"/>
                                        <span className="checkset-text">아이디 저장</span>
                                    </div>
                                </div>
                                <a className="btnset btnset-lg btnset-rect" href="javascript:void(0)">로그인</a>
                            </div>
                            <ul className="contents-list">
                                <Link to="/SignUpAgree" className="contents-item">
                                    <a href="javascript:void(0)" className="contents-link">회원가입</a>
                                </Link>
                                <li className="contents-item">
                                    <a href="javascript:void(0)" className="contents-link">아이디 찾기</a>
                                </li>
                                <li className="contents-item">
                                    <a href="javascript:void(0)" className="contents-link">비밀번호 찾기</a>
                                </li>
                            </ul>
                            <div className="contents-start">
                                <a className="btnset btnset-lg btnset-rect contents-start-naver"
                                   href="javascript:void(0)">네이버 로그인</a>
                                <a className="btnset btnset-lg btnset-rect contents-start-kakao"
                                   href="javascript:void(0)">카카오 로그인</a>
                            </div>
                            <button className="modal-close" type="button">
                                <img src="../resources/icons/ico_x.svg" alt="닫기"/>
                            </button>
                        </div>
                    </div>
                    <div className="dim"/>
                </div>
                {/* [E]opilsol-N29 */}
            </main>


        </div>
    );
}

export default LoginHome;
