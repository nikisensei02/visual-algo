import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      home icon
      <button><Link to="/bubble">Bubble</Link></button>
      <button><Link to="/selection">Selection</Link></button>
    </div>
  )
}

export default Home
