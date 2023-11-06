import './App.css';
import User from './components/User/User';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/user/*" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
