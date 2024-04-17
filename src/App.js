import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage";
import ContactUs from "./Components/ContactUs";
import ChickenBurger from "./Components/ChickenBurger";
import AboutUs from "./Components/AboutUs";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import ViewFullmenu from "./Components/ViewFullmenu";
import CardsDetails from "./Components/CardsDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/chickenBurger" element={<ChickenBurger />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/ViewFullmenu" element={<ViewFullmenu />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
        </>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
