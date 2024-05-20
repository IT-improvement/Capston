/* eslint-disable */
import Body from "./Body";
import {Helmet} from "react-helmet";
import PublicHeader from "../PublicHeader";



function Main() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Jersey+10&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            </Helmet>

            <PublicHeader/>
            <Body/>

        </div>
    );
}

export default Main;
