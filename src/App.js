import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import GradeCalculator from './components/GradeCalculator';
import BookList from './components/BookList';
import Cart from './components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  return (
    <div className="app-container" style={{ background: 'url(/images/background.png)', backgroundSize: 'cover' }}>

    <Layout>

      <Routes>
        <Route path="/Home" element={<GradeCalculator />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<GradeCalculator />} />
      </Routes>
    </Layout>
    </div>

  );
};

export default App;
