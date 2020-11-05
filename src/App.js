import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import MyNav from './components/Navbar';

function App() {
  return (
    <>
    <MyNav />
    <Footer />
      <Router>
        {/* <MyNav /> */}

          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
      
      </Router>
    </>
  );
}

export default App;
