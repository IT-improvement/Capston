/* eslint-disable */

import Slider from "react-slick";
import {FaHeart} from "react-icons/fa";
import React, {useState} from "react";



function AdditionalLineContent() {
    const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 위치를 추적하는 상태
    const [heartClicked, setHeartClicked] = useState(false); // 하트 아이콘이 클릭되었는지 추적하는 상태


    const feedSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current) // 슬라이드 변경 후 현재 슬라이드 위치 업데이트
    };

    const handleHeartDoubleClick = () => {
        setHeartClicked(!heartClicked); // 하트 아이콘 클릭 상태를 토글
    };


    return (

        <div className="additional-line">
            <article className="art">
                <div className="empty_box"/>
                <div className="feed">
                    <div className="feed_id">
                        <div className="id_round">
                            <div className="id_box">
                                <div className="id_box_img">
                                    <img className="id_img" src="/resources2/img/kyungmin.png" alt="내 프로필"/>
                                </div>
                                <div className="id_container">
                                    <div className="id_name">s_sewon</div>
                                    <div className="place">경민대학교</div>
                                </div>
                            </div>
                            <div className="more_details">
                                <img src="/resources2/img/more.png" alt="더보기"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide-counter2">({currentSlide + 1} / 3)</div>
                    <div className="feed_picture" onDoubleClick={handleHeartDoubleClick}>
                        <Slider {...feedSliderSettings}>
                            <img src="/resources2/img/roop.png" alt="피드 사진 1"/>
                            <img src="/resources2/img/seoulcampuse2.jpg" alt="피드 사진 2"/>
                            <img src="/resources2/img/seoulcampuse3.jpg" alt="피드 사진 3"/>
                        </Slider>
                        {/* 현재 슬라이드 위치를 나타내는 숫자 표시 */}
                    </div>
                    <div className="feed_bottom">
                        <div className="emoticon_box">
                            <div className="emoticon_box2">
                                <div className="heart_box">
                                    <div className="heart-icon-container" onDoubleClick={handleHeartDoubleClick}>
                                        <FaHeart color={heartClicked ? 'red' : 'black'}/>
                                    </div>
                                </div>
                                <div className="comment_box">
                                    <img className="coment" src="/resources2/img/comment.png" alt="코멘트"/>
                                </div>
                                <div className="direct_box">
                                    <img className="direct" src="/resources2/img/direct.png" alt="종이비행기"/>
                                </div>
                            </div>
                            <div className="bookmark_box">
                                <img className="bookmark" src="/resources2/img/bookmark.png" alt="공유"/>
                            </div>
                        </div>
                    </div>
                    <div className="feed_like_box">
                        <div className="feed_like_picture">
                            <img className="feed_like_peolpe" src="/resources2/img/picture8.png" alt="세원"/>
                        </div>
                        <div className="feed_like">s_sewon님 외 263명이 좋아합니다.</div>
                    </div>
                    <div className="feed_article">
                        <div className="feed_article_box">
                            <div className="comments_container">
                                <div className="comments">s_sewon 바람아 그만 불어줘 제발~~...</div>
                                <div className="comments1">더 보기</div>
                            </div>
                            <div className="comments1">댓글 <span id="count"/> 모두 보기</div>
                            <div className="comments1_box">
                                <div className="comments">sunmerrr 세원님 너무 멋져요!!</div>
                                <div className="comments">aida_shin.y 와 세원님 완전 화보</div>
                                <div className="comments">dooreplay 세원님 정말 짱이에요!</div>
                            </div>
                            <div className="new_comments"></div>
                            <div className="comments2">1일 전</div>
                        </div>
                    </div>
                    <div className="inputContainer">
                        <div className="type_comment">
                            <input className="inputBox" type="text" placeholder="댓글 달기..."/>
                        </div>
                        <span>
                            <button className="buttonBox" type="summit">게시</button>
                        </span>
                    </div>
                </div>
            </article>

            <article className="art">
                <div className="feed">
                    <div className="feed_id">
                        <div className="id_round">
                            <div className="id_box">
                                <div className="id_box_img">
                                    <img className="id_img" src="/resources2/img/seoul.png" alt="내 프로필"/>
                                </div>
                                <div className="id_container">
                                    <div className="id_name">s_sewon</div>
                                    <div className="place">경민대학교</div>

                                </div>
                            </div>
                            <div className="more_details">
                                <img src="/resources2/img/more.png" alt="더보기"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide-counter">({currentSlide + 1} / 3)</div>
                    <div className="feed_picture" onDoubleClick={handleHeartDoubleClick}>
                        <Slider {...feedSliderSettings}>
                            <img src="/resources2/img/seoulcampuse.jpg" alt="피드 사진 3"/>
                            <img src="/resources2/img/seoulcampuse2.jpg" alt="피드 사진 2"/>
                            <img src="/resources2/img/seoulcampuse3.jpg" alt="피드 사진 3"/>
                        </Slider>
                        {/* 현재 슬라이드 위치를 나타내는 숫자 표시 */}
                    </div>
                    <div className="feed_bottom">
                        <div className="emoticon_box">
                            <div className="emoticon_box2">
                                <div className="heart_box">
                                    <div className="heart-icon-container" onDoubleClick={handleHeartDoubleClick}>
                                        <FaHeart color={heartClicked ? 'red' : 'black'}/>
                                    </div>
                                </div>
                                <div className="comment_box">
                                    <img className="coment" src="/resources2/img/comment.png" alt="코멘트"/>
                                </div>
                                <div className="direct_box">
                                    <img className="direct" src="/resources2/img/direct.png" alt="종이비행기"/>
                                </div>
                            </div>
                            <div className="bookmark_box">
                                <img className="bookmark" src="/resources2/img/bookmark.png" alt="공유"/>
                            </div>
                        </div>
                    </div>
                    <div className="feed_like_box">
                        <div className="feed_like_picture">
                            <img className="feed_like_peolpe" src="/resources2/img/picture8.png" alt="세원"/>
                        </div>
                        <div className="feed_like">s_sewon님 외 263명이 좋아합니다.</div>
                    </div>
                    <div className="feed_article">
                        <div className="feed_article_box">
                            <div className="comments_container">
                                <div className="comments">s_sewon 바람아 그만 불어줘 제발~~...</div>
                                <div className="comments1">더 보기</div>
                            </div>
                            <div className="comments1">댓글 <span id="count"/> 모두 보기</div>
                            <div className="comments1_box">
                                <div className="comments">sunmerrr 세원님 너무 멋져요!!</div>
                                <div className="comments">aida_shin.y 와 세원님 완전 화보</div>
                                <div className="comments">dooreplay 세원님 정말 짱이에요!</div>
                            </div>
                            <div className="new_comments"></div>
                            <div className="comments2">1일 전</div>
                        </div>
                    </div>
                    <div className="inputContainer">
                        <div className="type_comment">
                            <input className="inputBox" type="text" placeholder="댓글 달기..."/>
                        </div>
                        <span>
                            <button className="buttonBox" type="summit">게시</button>
                        </span>
                    </div>
                </div>
            </article>

        </div>
    );
}

export default AdditionalLineContent;
