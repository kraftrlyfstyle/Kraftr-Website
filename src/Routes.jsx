import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import ForgotPassword from './pages/ForgotPassword'

const SiteRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/shoe/:id' element={<Product/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default SiteRoutes