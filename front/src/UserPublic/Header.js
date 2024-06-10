/* eslint-disable */
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
                    <Link to="/" className="camera_box">
                        <img className="logo" src="/resources2/img/logo.png" alt="인스타 로고"/>
                    </Link>

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
                        <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/upload--v1.png"/>
                    </Link>
                    <Link to="/login" className="sidebar-link">
                        <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/school-building.png"
                             alt="홈"/>
                    </Link>
                    <Link to="/chat" className="sidebar-link">
                        <img width="48" height="48"
                             src="https://img.icons8.com/pulsar-color/48/chat-message-sent.png" alt="채팅"/>
                    </Link>
                    <Link to="/calendar" className="sidebar-link">
                        <img width="48" height="48"
                             src="https://img.icons8.com/pulsar-color/48/000000/edit-calendar.png" alt="달력"/>
                    </Link>

                        <Link to="/projectList" className="myProfile_box_2">
                            <img className="my_profile" src="/resources2/img/picture8.png" alt="내 프로필"/>
                        </Link>
                    </div>

            </header>
        </div>

);
}

export default Header;
