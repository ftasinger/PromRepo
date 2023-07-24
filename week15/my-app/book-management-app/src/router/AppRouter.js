import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import Header from '../components/header'; // Ensure correct casing for component name
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes> {/* Use 'Routes' instead of 'Switch' */}
        <Route path="/" element={<BooksList />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
