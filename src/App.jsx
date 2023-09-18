// Panggil Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Panggil Style Css
import './dist/css/style.css';
// Panggil Fungsi Routes & Route
import{ Routes, Route} from "react-router-dom";

//Panggil Komponen Navbar 
import NavbarComponent from "./components/NavbarComponent";
// Panggil Semua File di folder Pages
import HomePage from "./pages/HomePage";
import PaketPage from "./pages/MenuPage";
import ServicePage from "./pages/OrderPage";
import FeedPage from "./pages/FeedPage";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/FooterComponent";


function App() {
  return <div>
    <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/profile" Component={FeedPage} />
        <Route path="/service" Component={ServicePage} />
        <Route path="/oaket" Component={PaketPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
    <FooterComponent />
  </div>
}

export default App
