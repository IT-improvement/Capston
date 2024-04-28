import Main from "./Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import LoginAgree from "./LoginAgree/LoginAgree";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login/Login.jsx" element={<Login />} />
          <Route path="/LoginAgree/LoginAgree.jsx" element={<LoginAgree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
