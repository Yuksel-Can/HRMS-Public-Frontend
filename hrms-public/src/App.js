import './App.css';
import LoginCandidatePage from './layouts/loginPages/LoginCandidateForm';
import LoginDashboard from './layouts/loginPages/LoginDashboard';
//import imgLogo from './assets/images/logo.png';
//import { FaMapMarkedAlt, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import MainDashboard from './layouts/main/MainDashboard';
import JobPostingDetailDashboard from './layouts/jobPostingPages/JobPostingDetailDashboard';
import JobPostingDetailRight from './pages/JobPostingDetailRight';
function App() {
  return (
    <div className="App">
      <MainDashboard />
      {/*<LoginDashboard/>*/}
      {/*<JobPostingDetailDashboard/>*/}
    </div>

  );
}

export default App;
