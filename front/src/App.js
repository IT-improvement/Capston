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



function App() {

  return (
      <div>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/main_body_content" element={<MainBodyContent/>}/>
            <Route path="/additional_line_content" element={<AdditionalLineContent/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUpAgree" element={<SignUpAgree/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/NewPost" element={<NewPost/>}/>
            <Route path="/allSchoolNotice" element={<AllSchoolNotice/>}/>
            <Route path="/projectList" element={<ProjectList/>}/>
          </Routes>
      </div>
  );
}

export default App;
