import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bubble from './components/Bubble';
import Home from './components/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bubble" element={<Bubble/>} />
      </Routes>
    </Router>
  )
}

export default App
