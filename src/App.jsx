import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
