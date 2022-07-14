import Navbar from "./components/navbar";
import Clubs from "./components/clubs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Details from "./components/Details";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
     <Navbar/> 
    <Routes>
      <Route path="/" element={<Home />} exact ></Route>
      <Route path="/clubs" element={<Clubs />} exact ></Route>
      <Route path="/Details" element={<Details />} exact ></Route>
      <Route path="/Contacts" element={<Contacts />} exact ></Route>
     
    </Routes>
    <Footer/>
    </BrowserRouter>
    
     
  );
}

export default App;