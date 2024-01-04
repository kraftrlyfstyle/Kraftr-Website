import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from './pages/Products';
import Product from './pages/Product';

const SiteRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/shoe/:id' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default SiteRoutes