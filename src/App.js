import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// // import Body from './components/Body';
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
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
      
      </Router>
    </>
  );
}

export default App;
