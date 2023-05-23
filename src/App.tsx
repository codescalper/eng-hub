import React from 'react';
import Navbar from './components/Navbar';
import Viva from './components/Viva';
import ImpQ from './components/ImpQ';
import Books from './components/Books';
import Tips from './components/Tips';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/viva-questions" element={<Viva />} />
          <Route path="/imp-questions" element={<ImpQ />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
