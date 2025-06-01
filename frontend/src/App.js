import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import shoe_banner from './Components/Assets/shoe_banner.png';
import mobility_banner from './Components/Assets/mobility_banner.png';
import lawnmower_banner from './Components/Assets/lawnmower_banner.png';
import furniture_banner from './Components/Assets/furniture_banner.png';
import MakePayment from './Pages/MakePayment';
import LiveChatWidget from './Components/LiveChatWIdget';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68395217679e18190a360c4c/1isfuhb2e";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/shoe' element={<ShopCategory banner={shoe_banner} category="shoe" />} />
          <Route path='/mobility' element={<ShopCategory banner={mobility_banner} category="mobility" />} />
          <Route path='/furniture' element={<ShopCategory banner={furniture_banner} category="furniture" />} />
          <Route path='/lawnmower' element={<ShopCategory banner={lawnmower_banner} category="lawnmower" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/makepayment' element={<MakePayment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
