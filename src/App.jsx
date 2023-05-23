import React from 'react';
import Navbar from './components/Navbar.tsx';
import Viva from './components/Viva.tsx';
import ImpQ from './components/ImpQ.tsx';
import Books from './components/Books.tsx';
import Tips from './components/Tips.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/books" component={Books} />
        <Route path="/tips" component={Tips} />
        <Route path="/viva-questions" component={Viva} />
        <Route path="/imp-questions" component={ImpQ} />
      </Routes  >
      </BrowserRouter>
    </>
  );
}

export default App;
