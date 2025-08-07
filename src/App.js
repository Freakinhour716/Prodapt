import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import MyComponent from './components/MyComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes,Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';


// App.js

function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar />
      <main>
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/my-component" element={<MyComponent />} />    
          <Route path="/header" element={<Header />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      
        </Routes>
        </main>
        <Footer/>
        </div>
      </Router>
      
     
    
  );
}

export default App;
