import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bubble from './components/Bubble';
import Home from './components/Home';
import Selection from './components/Selection';
import Insertion from './components/Insertion';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bubble" element={<Bubble/>} />
        <Route path="/selection" element={<Selection/>} />
        <Route path="/insertion" element={<Insertion/>} />
      </Routes>
    </Router>
  )
}

export default App
