import Main from "./Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import SignUpAgree from "./SignUpAgree/SignUpAgree";
import SignUp from "./SignUp/SignUp";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Helmet>
            <script src="/resources/js/setting.js"></script>
            <script src="/resources/js/plugin.js"></script>
            <script src="/resources/js/template.js"></script>
            <script src="/resources/js/common.js"></script>
            <script src="/resources/js/script.js"></script>
        </Helmet>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login/Login.jsx" element={<Login />} />
          <Route path="/SignUpAgree/SignUpAgree.jsx" element={<SignUpAgree />} />
            <Route path="/SignUp/SignUp.jsx" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
