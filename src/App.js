import Navbar from "./components/navbar";
import Clubs from "./components/clubs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Home from "./components/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact ></Route>
      <Route path="/clubs" element={<Clubs />} exact ></Route>
    </Routes>
    </BrowserRouter>
     
  );
}

export default App;