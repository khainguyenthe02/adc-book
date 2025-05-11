import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import ProductPage from './pages/ProductPage';
import DungCuPage from './pages/DungCuPage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ConfirmCheckout from './pages/ConfirmCheckout';
import FollowOrder from './pages/FollowOrder';
import Delivery from './pages/Delivery';
import Profile from './pages/Profile';
import ProfileForgotPassword from './pages/ProfileForgotPassword';
import OrderManager from './pages/OrderManager';
import CategoryManager from './pages/CategoryManager';
import ProductManager from './pages/ProductManager';
import EmployeeManager from './pages/EmployeeManager';
import CustomerManager from './pages/CustomerManager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Thêm các route khác ở đây */}
        <Route path="*" element={<Home />} />
        <Route path='/list-product' element={<ProductPage />} />
        <Route path='/list-dung-cu' element={<DungCuPage/>} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/confirm-checkout' element={<ConfirmCheckout />} />
        <Route path='/follow-order' element={<FollowOrder />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/change-password' element={<ProfileForgotPassword/>}/>
        <Route path='/orders' element= {<OrderManager/>}/>
        <Route path='/categories' element={<CategoryManager/>}/>
        <Route path='/products' element={<ProductManager/>}/>
        <Route path='/employees' element={<EmployeeManager/>}/>
        <Route path='/customers' element={<CustomerManager/>}/>


      </Routes>
    </Router>
  );
}

export default App;