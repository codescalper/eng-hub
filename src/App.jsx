import React from 'react';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/tips" component={Tips} />
        <Route path="/viva-questions" component={Viva} />
        <Route path="/imp-questions" component={ImpQ} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
