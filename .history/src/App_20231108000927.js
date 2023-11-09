import './App.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import R
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/user/*" element={<User/>} />
          <Route path="/Register/*" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
