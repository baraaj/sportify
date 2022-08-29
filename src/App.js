import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./components/footer/footer";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";
import Clubs from "./components/clubs/clubs";
import Navbar from './components/navbar/navbar';
import Club from './components/club/club';
import Details from './components/clubs/Details';
import Events from './components/evenements/Evènements';
import Login from './components/login/Login';
import Signup from './components/login/signup';
import Sidenav from './components/sidenav/SideNav';
import ClubsPage from './components/sidenav/ClubsPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
     <Navbar/> 
    
    <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/contacts" element={<Contacts/>} exact />
    <Route path="/clubs" element={<Clubs/>} exact />
    <Route path="/club/:id" element={<Club/>} exact />
    <Route path="/details/:act" element={<Details/>} exact />
    <Route path="/events" element={<Events/>} exact />
    <Route path="/admin" element={<Sidenav/>} exact />
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    
     
  );
}

export default App;