        /* eslint-disable */

        function Body() {
            return (
                <div>
                    <div>
                        <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/noticeboard.png"
                             alt="noticeboard"/>
                    </div>  
                    <div className="main_container">
                        <div className="main_body_iframe">
                            <iframe title="main_body" src="/main_body_content" className="iframe"></iframe>
                        </div>

                        <div className="additional_line_iframe"> {/* 추가된 줄 */}

                            <iframe title="additional_line" src="/additional_line_content" className="iframe"></iframe>

                        </div>
                    </div>
                </div>
            );
        }

        export default Body;
