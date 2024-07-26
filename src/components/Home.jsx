import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 p-6 text-center min-h-screen">
      <div className="text-2xl mb-4">home icon</div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2">
        <Link to="/bubble">Bubble</Link>
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2">
        <Link to="/selection">Selection</Link>
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 m">
        <Link to="/insertion">Insertion</Link>
      </button>
    </div>
  );
};

export default Home;
