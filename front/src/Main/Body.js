/* eslint-disable */

import React, { useState } from "react";
import Aside from "./Aside";
import "./posts.css";

function Body() {
    const [showPostsMain, setShowPostsMain] = useState(false);
    const [showPostsAdditional, setShowPostsAdditional] = useState(false);

    const toggleMainContent = () => {
        setShowPostsMain(!showPostsMain);
    };

    const toggleAdditionalContent = () => {
        setShowPostsAdditional(!showPostsAdditional);
    };

    return (
        <div className="main_container">
            <div className="iframe-container">
                <div className="toggle-container">
                    <label className="switch">
                        <input type="checkbox" onChange={toggleMainContent} />
                        <span className="slider round"></span>
                    </label>
                    <span className="toggle-text">
            {showPostsMain ? "Show Main Iframe" : "Show Posts"}
          </span>
                </div>
                <div className="main_body_iframe">
                    {showPostsMain ? (
                        <iframe title="posts" src="/posts" className="iframe"></iframe>
                    ) : (
                        <iframe title="main_body" src="/main_body_content" className="iframe"></iframe>
                    )}
                </div>
            </div>
            <div className="iframe-container">
                <div className="toggle-container">
                    <label className="switch">
                        <input type="checkbox" onChange={toggleAdditionalContent} />
                        <span className="slider round"></span>
                    </label>
                    <span className="toggle-text">
            {showPostsAdditional ? "Show Additional Iframe" : "Show Posts"}
          </span>
                </div>
                <div className="additional_line_iframe">
                    {showPostsAdditional ? (
                        <iframe title="posts" src="/posts" className="iframe"></iframe>
                    ) : (
                        <iframe title="additional_line" src="/additional_line_content" className="iframe"></iframe>
                    )}
                </div>
            </div>
            <Aside />
        </div>
    );
}

export default Body;
