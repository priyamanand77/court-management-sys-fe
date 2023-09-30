import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import SignInPage from './components/SignInPage';
import AllUserReq from './components/AllUserReq';


function App() {
  return (
    <div className="App">
  
      <Router>
        <ToastContainer />
        <Routes>
      
          <Route path="/" element={<Home/>} />
          <Route path="/signUp" element={<SignUpPage/>} />
          <Route path='/signIn' element={<SignInPage/>} />
          <Route path='/get-all' element={<AllUserReq/>} />

      
        </Routes>
      </Router>
    </div>
  );
}
export default App;
