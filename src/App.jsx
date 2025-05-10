import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/Product";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import ContactPage from "./pages/Contact";
import WishlistPage from "./pages/Wishlist";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/Account";
import CheckoutPage from "./pages/Checkout";
import AboutPage from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
