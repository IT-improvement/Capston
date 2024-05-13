import Main from "./Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import SignUpAgree from "./SignUpAgree/SignUpAgree";
import SignUp from "./SignUp/SignUp";
import NewPost from "./NewPost/NewPost";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUpAgree" element={<SignUpAgree />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/NewPost" element={<NewPost />} />
          <Route path="/Main" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
