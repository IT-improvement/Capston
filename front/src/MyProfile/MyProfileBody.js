import React from "react";
import PublicSidebar from "../UserPublic/PublicSidebar";

function MyProfileBody(){
    return(
        <div>
            <PublicSidebar/>
            <div className="myprofile-container">
                <div className="myprofile-img">
                    <div className="main-profile">
                        <a href="">
                            <img className="profile-img" src="/resources2/img/mokoko.jpg"/>
                        </a>
                    </div>
                </div>
                <div className="profile-info">
                    <div className="profile-name">
                        <h2 className="profile-name-style">모코코</h2>
                        <div className="profile-friend">
                            <div>
                                게시물
                                <span className="profile-font-style">9</span>
                            </div>
                            <div className="profile-friend-font">
                                팔로우
                                <span className="profile-font-style">100</span>
                            </div>
                            <div className="profile-friend-font">
                                팔로워
                                <span className="profile-font-style">100</span>
                            </div>
                        </div>
                        <div className="profile-real-name">코코모</div>
                    </div>
                    <div className="btn-profile">
                        <div>
                            <button className="btn-profile-style">프로필 편집</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-post">
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
                <button className="post-image-style">
                    <img className="profilepage-image" src="/resources2/img/mokoko.jpg"/>
                </button>
            </div>
        </div>
    );
}

export default MyProfileBody;