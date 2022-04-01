import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Router>
            <Routes>
            <Route path="/profile" element={<Profile/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
