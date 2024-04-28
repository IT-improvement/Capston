import Main from "./Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/loin/Loin.jsx" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
