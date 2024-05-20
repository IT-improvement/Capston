/* eslint-disable */



import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

function NewPostBody() {
    return (
        <div>
            <section id="container">

           {/*     <Helmet>
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
*/}
                <div id="main_container">
                    <div className="post_form_container">
                        <form action="#" className="post_form">
                            <div className="title">
                                NEW POST
                            </div>
                            <div className="preview">
                                <div className="upload">
                                    <div className="post_btn">
                                        <div className="plus_icon">
                                            <span/>
                                            <span/>
                                        </div>
                                        <p>포스트 이미지 추가</p>
                                        <canvas id="imageCanvas"/>
                                        {/*<p><img id="img_id" src="#" style="width: 300px; height: 300px; object-fit: cover" alt="thumbnail"></p>*/}
                                    </div>
                                </div>
                            </div>
                            <p>
                                <input type="file" name="photo" id="id_photo" required="required"/>
                            </p>
                            <p>
          <textarea name="content" id="text_field" cols={50} rows={5} placeholder="140자 까지 등록 가능합니다.
#태그명 을 통해서 검색 태그를 등록할 수 있습니다.
예시 : I # love # insta!" defaultValue={""}/>
                            </p>
                            <input className="submit_btn" type="submit" defaultValue="저장"/>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default NewPostBody;
