import {Helmet} from "react-helmet";

function NewPostHeader() {
    return (
        <div>
            <Helmet>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                {/* Facebook Meta Tags / 페이스북 오픈 그래프 */}
                <meta property="og:url" content="http://kindtiger.dothome.co.kr/insta"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="instagram"/>
                <meta property="og:description" content="instagram clone"/>
                <meta property="og:image" content="http://kindtiger.dothome.co.kr/insta/imgs/instagram.jpeg"/>
                .
                {/* Twitter Meta Tags / 트위터 */}
                <meta name="twitter:card" content="instagram clone"/>
                <meta name="twitter:title" content="instagram"/>
                <meta name="twitter:description" content="instagram clone"/>
                <meta name="twitter:image" content="http://kindtiger.dothome.co.kr/insta/imgs/instagram.jpeg"/>
                {/* Google / Search Engine Tags / 구글 검색 엔진 */}
                <meta itemProp="name" content="instagram"/>
                <meta itemProp="description" content="instagram clone"/>
                <meta itemProp="image" content="http://kindtiger.dothome.co.kr/insta/imgs/instagram.jpeg"/>
                <title>instagram</title>
            </Helmet>
        </div>
    );
}

export default NewPostHeader;
