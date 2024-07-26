import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bubble from './components/Bubble';
import Home from './components/Home';
import Selection from './components/Selection';
import Insertion from './components/Insertion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubble" element={<Bubble />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/insertion" element={<Insertion />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
