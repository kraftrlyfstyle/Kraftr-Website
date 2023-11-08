import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from "./pages/App";
import Login from "./pages/Login";

const SiteRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default SiteRoutes