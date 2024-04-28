/* eslint-disable */
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
function Header() {
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
                <title>첫페이지 | capston</title>
            </Helmet>

            <header className="opilsol-N1" data-bid="ZPlVH31uPs" id>
                <div className="header-container container-lg">
                    <div className="header-left">
                        <h1 className="header-title">
                            <a href="javascript:void(0)">
                                <img src="../resources/images/img_logo_white.png" alt="로고"/>
                            </a>
                        </h1>
                    </div>
                    <div className="header-center">
                        <ul className="header-member">
                            <li>
                                <a href="javascript:void(0)">로그인</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">회원가입</a>
                            </li>
                        </ul>
                        <ul className="header-gnblist">
                            <li className="header-gnbitem">
                                <a className="header-gnblink" href="javascript:void(0)">
                                    <span>회사소개</span>
                                </a>
                                <ul className="header-sublist">
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>회사개요</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>CEO인사말</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>연혁</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>오시는길</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-gnbitem">
                                <a className="header-gnblink" href="javascript:void(0)">
                                    <span>사업소개</span>
                                </a>
                                <ul className="header-sublist">
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>스포츠센터</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>공공문화체육시설</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>아파트 커뮤니티</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>모바일</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-gnbitem">
                                <a className="header-gnblink" href="javascript:void(0)">
                                    <span>제품소개</span>
                                </a>
                                <ul className="header-sublist">
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>스포츠센터</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>공공 문화체육시설</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>아파트 커뮤니티</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>모바일</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-gnbitem">
                                <a className="header-gnblink" href="javascript:void(0)">
                                    <span>인재채용</span>
                                </a>
                                <ul className="header-sublist">
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>인사제도</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>복리후생</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-gnbitem">
                                <a className="header-gnblink" href="javascript:void(0)">
                                    <span>고객센터</span>
                                </a>
                                <ul className="header-sublist">
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>공지사항</span>
                                        </a>
                                    </li>
                                    <li className="header-subitem">
                                        <a className="header-sublink" href="javascript:void(0)">
                                            <span>문의하기</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right">
                        <div className="header-utils">
                            <button className="btn-search">
                                <img src="../resources/icons/ico_search_white.svg" alt="검색"/>
                            </button>
                            <Link to="./loin/Loin.jsx" className="btn-user">
                                <img src="../resources/icons/ico_user_white.svg" alt="마이페이지" />
                            </Link>
                            <button className="btn-allmenu">
                                <img src="../resources/icons/ico_menu3_white.svg" alt="PC메뉴"/>
                            </button>
                            <button className="btn-momenu">
                                <img src="../resources/icons/ico_menu3_white.svg" alt="모바일메뉴"/>
                            </button>
                            <button className="btn-moclose">
                                <img src="../resources/icons/ico_close_black.svg" alt="닫기"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header-fullmenu fullmenu-top">
                    <div className="fullmenu-wrapper">
                        <div className="fullmenu-head">
                            <h4 className="fullmenu-title">
                                <a href="javascript:void(0)">
                                    <img src="../resources/images/img_logo_black.png" alt="로고"/>
                                </a>
                            </h4>
                            <ul className="fullmenu-member">
                                <li>
                                    <a href="javascript:void(0)">로그인</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">회원가입</a>
                                </li>
                            </ul>
                        </div>
                        <ul className="fullmenu-gnblist">
                            <li className="fullmenu-gnbitem">
                                <a className="fullmenu-gnblink" href="javascript:void(0)">
                                    <span>회사소개</span>
                                </a>
                                <ul className="fullmenu-sublist">
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>회사개요</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>CEO인사말</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>연혁</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>오시는 길</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="fullmenu-gnbitem">
                                <a className="fullmenu-gnblink" href="javascript:void(0)">
                                    <span>사업소개</span>
                                </a>
                                <ul className="fullmenu-sublist">
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>스포츠센터</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>공공 문화체육시설</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>아파트 커뮤니티</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>모바일</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="fullmenu-gnbitem">
                                <a className="fullmenu-gnblink" href="javascript:void(0)">
                                    <span>제품소개</span>
                                </a>
                                <ul className="fullmenu-sublist">
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>스포츠센터</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>공공 문화체육시설</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>아파트 커뮤니티</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>모바일</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="fullmenu-gnbitem">
                                <a className="fullmenu-gnblink" href="javascript:void(0)">
                                    <span>인재채용</span>
                                </a>
                                <ul className="fullmenu-sublist">
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>인사제도</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>복리후생</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="fullmenu-gnbitem">
                                <a className="fullmenu-gnblink" href="javascript:void(0)">
                                    <span>고객센터</span>
                                </a>
                                <ul className="fullmenu-sublist">
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>공지사항</span>
                                        </a>
                                    </li>
                                    <li className="fullmenu-subitem">
                                        <a className="fullmenu-sublink" href="javascript:void(0)">
                                            <span>문의하기</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <button className="fullmenu-close">
                        <img src="../resources/icons/ico_close_black.svg" alt="닫기"/>
                    </button>
                </div>
                <div className="header-search fullmenu-top">
                    <div className="fullmenu-wrapper">
                        <div className="fullmenu-head">
                            <h4 className="fullmenu-title">
                                <a href="javascript:void(0)">
                                    <img src="../resources/images/img_logo_black.png" alt="로고"/>
                                </a>
                            </h4>
                        </div>
                        <div className="header-search-wrap">
                            <div className="container-md">
                                <div className="header-search-form">
                                    <div className="inputset inputset-line">
                                        <button className="icon-right icon-search btn" type="button" aria-label="아이콘">
                                        </button>
                                        <input type="text" className="inputset-input form-control"
                                               placeholder="검색어를 입력해주세요." aria-label="내용"/>
                                    </div>
                                </div>
                                <div className="recom-list">
                                    <h5 className="recom-tit">추천 검색어</h5>
                                    <ul>
                                        <li>
                                            <a href="#n">솔루션</a>
                                        </li>
                                        <li className="on">
                                            <a href="#n">아파트 커뮤니티</a>
                                        </li>
                                        <li>
                                            <a href="#n">플랫폼</a>
                                        </li>
                                        <li>
                                            <a href="#n">스포츠센터</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="fullmenu-close">
                        <img src="../resources/icons/ico_close_black.svg" alt="닫기"/>
                    </button>
                </div>
            </header>


        </div>
    );
}

export default Header;
