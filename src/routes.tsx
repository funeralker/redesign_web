import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import OrderPage from './pages/OrderPage';
import CategorySerachPage from './pages/CategorySerachPage';
import BackToTop from './components/BackToTop';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:name" element={<ProductDetailPage />} />
        <Route path="/order/:name" element={<OrderPage />} />
        <Route path="/result" element={<CategorySerachPage />} />
      </Routes>
      <BackToTop /> 
    </Router>
  );
};

export default AppRoutes;
