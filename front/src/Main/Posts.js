/* eslint-disable */

import React from "react";
import { FaEye, FaComment, FaFlag } from 'react-icons/fa';
import "./posts.css";

function Posts() {
    const posts = [
        { id: 1, title: "첫 번째 게시글", author: "사용자1", comments: 5, views: 100 },
        { id: 2, title: "두 번째 게시글", author: "사용자2", comments: 10, views: 200 },
        { id: 3, title: "세 번째 게시글", author: "사용자3", comments: 2, views: 50 },
        { id: 4, title: "네 번째 게시글", author: "사용자4", comments: 8, views: 150 },
        { id: 5, title: "다섯 번째 게시글", author: "사용자5", comments: 4, views: 120 },
    ];

    const handleReport = (postId) => {
        alert(`게시글 ${postId}이(가) 신고되었습니다.`);
    };

    const handlePostClick = (postId) => {
        window.top.location.href = "/detailedPost"; // top window의 location을 변경
    };

    return (
        <div className="posts-container">
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h3 className="post-title" onClick={() => handlePostClick(post.id)}>{post.title}</h3>
                    <p className="post-author">작성자: {post.author}</p>
                    <div className="post-info">
                        <div className="post-comments">
                            <FaComment /> {post.comments}
                        </div>
                        <div className="">
                            <FaEye /> {post.views}
                        </div>
                        <FaFlag className="post-report" onClick={() => handleReport(post.id)} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
