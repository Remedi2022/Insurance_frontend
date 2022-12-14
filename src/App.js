import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notice from './components/Notice/Notice'
import UserData from "./Data.json";
import Check from './components/Check/Check';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home Userdata={UserData} />}></Route>
          <Route path="/Notice/*" element={<Notice />}></Route>
          <Route path="/CheckHL7/*" element={<Check />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
