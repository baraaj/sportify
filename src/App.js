import Navbar from "./components/navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
