        /* eslint-disable */
        import React, { useState } from 'react';
        import Slider from 'react-slick';
        import { Helmet } from 'react-helmet';
        import "slick-carousel/slick/slick.css";
        import "slick-carousel/slick/slick-theme.css";
        import { FaHeart, FaRegHeart } from "react-icons/fa"; // 빈 하트 아이콘 추가

        function NextArrow(props) {
            const { onClick } = props;
            return (
                <div
                    style={{
                        display: 'block',
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: '2',
                        cursor: 'pointer',
                        color: 'white', // 아이콘 색상 변경
                        fontSize: '30px' // 아이콘 크기 조정
                    }}
                    onClick={onClick}
                >
                    &gt;
                </div>
            );
        }

        function PrevArrow(props) {
            const { onClick } = props;
            return (
                <div
                    style={{
                        display: 'block',
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: '2',
                        cursor: 'pointer',
                        color: 'white', // 아이콘 색상 변경
                        fontSize: '30px ' // 아이콘 크기 조정
                    }}
                    onClick={onClick}
                >
                    &lt;
                </div>
            );
        }

        function Article({ feedSliderSettings, currentSlide, handleHeartDoubleClick, heartClicked }) {
            return (
                <article className="art">
                    <div className="empty_box" />
                    <div className="feed">
                        <div className="feed_id">
                            <div className="id_round">
                                <div className="id_box">
                                    <div className="id_box_img">
                                        <img className="id_img" src="/resources2/img/seoul.png" alt="내 프로필" />
                                    </div>
                                    <div className="id_container">
                                        <div className="id_name">s_sewon</div>
                                        <div className="place">경민대학교</div>
                                    </div>
                                </div>
                                <div className="more_details">
                                    <img src="/resources2/img/more.png" alt="더보기" />
                                </div>
                            </div>
                        </div>
                        <div className="slide-counter">({currentSlide + 1} / 4)</div>
                        <div className="feed_picture" onDoubleClick={handleHeartDoubleClick}>
                            <Slider {...feedSliderSettings}>
                                <img src="/resources2/img/seoulcampuse3.jpg" alt="피드 사진 3" />
                                <img src="/resources2/img/seoulcampuse2.jpg" alt="피드 사진 2" />
                                <img src="/resources2/img/seoulcampuse3.jpg" alt="피드 사진 3" />
                                <img src="/resources2/img/seoulcampuse2.jpg" alt="피드 사진 2" />
                            </Slider>
                            {/* 현재 슬라이드 위치를 나타내는 숫자 표시 */}
                        </div>
                        <div className="feed_bottom">
                            <div className="emoticon_box">
                                <div className="emoticon_box2">
                                    <div className="heart_box">
                                        <div className="heart-icon-container" onDoubleClick={handleHeartDoubleClick}>
                                            {heartClicked ? (
                                                <FaHeart color="red" size={24} />
                                            ) : (
                                                <FaRegHeart color="black" size={24} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="comment_box">
                                        <img className="coment" src="/resources2/img/comment.png" alt="코멘트" />
                                    </div>
                                    <div className="direct_box">
                                        <img className="direct" src="/resources2/img/direct.png" alt="종이비행기" />
                                    </div>
                                </div>
                                <div className="bookmark_box">
                                    <img className="bookmark" src="/resources2/img/bookmark.png" alt="공유" />
                                </div>
                            </div>
                        </div>
                        <div className="feed_like_box">
                            <div className="feed_like_picture">
                                <img className="feed_like_peolpe" src="/resources2/img/picture8.png" alt="세원" />
                            </div>
                            <div className="feed_like">s_sewon님 외 263명이 좋아합니다.</div>
                        </div>
                        <div className="feed_article">
                            <div className="feed_article_box">
                                <div className="comments_container">
                                    <div className="comments">s_sewon 바람아 그만 불어줘 제발~~...</div>
                                    <div className="comments1">더 보기</div>
                                </div>
                                <div className="comments1">댓글 <span id="count" /> 모두 보기</div>
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
                                <input className="inputBox" type="text" placeholder="댓글 달기..." />
                            </div>
                            <span>
                        <button className="buttonBox" type="summit">게시</button>
                    </span>
                        </div>
                    </div>
                </article>
            );






        }
        function AdditionalLineContent() {
            const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 위치를 추적하는 상태
            const [heartClicked, setHeartClicked] = useState([false, false]); // 하트 아이콘이 클릭되었는지 추적하는 상태

            const feedSliderSettings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                afterChange: (current) => setCurrentSlide(current), // 슬라이드 변경 후 현재 슬라이드 위치 업데이트
                nextArrow: <NextArrow />,
                prevArrow: <PrevArrow />,
            };

            const handleHeartDoubleClick = (index) => {
                setHeartClicked((prevState) => {
                    const newState = [...prevState];
                    newState[index] = !newState[index];
                    return newState;
                });
            };


            return (
                <div className="additional-line">
                    <Article
                        feedSliderSettings={feedSliderSettings}
                        currentSlide={currentSlide}
                        handleHeartDoubleClick={() => handleHeartDoubleClick(0)}
                        heartClicked={heartClicked[0]}
                    />
                    <Article
                        feedSliderSettings={feedSliderSettings}
                        currentSlide={currentSlide}
                        handleHeartDoubleClick={() => handleHeartDoubleClick(1)}
                        heartClicked={heartClicked[1]}
                    />
                </div>
            );
        }

        export default AdditionalLineContent;
