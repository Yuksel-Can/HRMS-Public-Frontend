import './App.css';
import LoginCandidatePage from './layouts/loginPages/LoginCandidatePage';
//import imgLogo from './assets/images/logo.png';
//import { FaMapMarkedAlt, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import MainDashboard from './layouts/main/MainDashboard';
function App() {
  return (
    <div className="App">
      {/*<MainDashboard />*/}
      <LoginCandidatePage/>
    </div>

  );
}

export default App;
