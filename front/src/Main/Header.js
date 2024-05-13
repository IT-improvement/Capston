import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
function Header() {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>repl.it</title>
            </Helmet>

            <header>
                <div className="left_box">
                    <Link to="/Main" className="camera_box">
                        <img className="logo" src="/resources2/img/logo.png" alt="인스타 로고"/>
                    </Link>
                    <div className="line">|</div>
                    <div className="logo_box">
                        <text className="logoFont">EveryStarGram</text>
                    </div>
                </div>
                <span className="seach_box">
    <input type="search" className="search" placeholder="검색"/>
    <div className="magnifier_box">
      <img className="magnifier" src="/resources2/img/magnifier.png" alt="검색버튼"/>
    </div>
  </span>
                <div className="right_box">
                    <Link to="/NewPost" className="home_box">
                        <img className="img_size" src="/resources2/img/home.png" alt="탐색"/>
                    </Link>
                    <div className="direct_box">
                        <img className="img_size" src="/resources2/img/direct.png" alt="하트"/>
                    </div>
                    <div className="compass_box">
                        <img className="compass"
                             src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                             alt="내 프로필"/>
                    </div>
                    <div className="myProfile_box">
                        <img className="myProfile"
                             src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                             alt="내 프로필"/>
                    </div>
                    <Link to="/Login" className="myProfile_box_2">
                        <img className="my_profile" src="/resources2/img/picture8.png" alt="내 프로필"/>
                    </Link>
                </div>

            </header>

        </div>
    );
}

export default Header;
