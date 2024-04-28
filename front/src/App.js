import Main from "./Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import SignUpAgree from "./SignUpAgree/SignUpAgree";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
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
