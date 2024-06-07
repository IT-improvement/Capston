/* eslint-disable */

import Main from "./Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import SignUpAgree from "./SignUpAgree/SignUpAgree";
import SignUp from "./SignUp/SignUp";
import NewPost from "./NewPost/NewPost";
import MainBodyContent from "./Main/MainBodyContent";
import AdditionalLineContent from "./Main/AdditionalLineContent";
import AllSchoolNotice from "./AllSchoolNotice/AllSchoolNotice";
import ProjectList from "./Project/ProjectList";
import BookmarkProject from "./BookmarkProject/BookmarkProject";
import Join from "./Join/Join";



function App() {

  return (
      <div>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/main_body_content" element={<MainBodyContent/>}/>
              <Route path="/join" element={<Join/>}/>

              <Route path="/additional_line_content" element={<AdditionalLineContent/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/SignUpAgree" element={<SignUpAgree/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/NewPost" element={<NewPost/>}/>
            <Route path="/allSchoolNotice" element={<AllSchoolNotice/>}/>
            <Route path="/projectList" element={<ProjectList/>}/>
              <Route path="/BookmarkProject" element={<BookmarkProject/>}/>
          </Routes>
      </div>
  );
}

export default App;
