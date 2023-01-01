import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const name = JSON.parse(localStorage.getItem("user-data"))?.user?.name;

  const handleLogout = () => {
    localStorage.removeItem("user-data");
    navigate("/login");
  };

  return (
    <div className="flex justify-between px-3 bg-gray-800 shadow items-center">
      <nav className="w-full py-3 flex space-x-6 px-5">
        <Link
          to="/"
          className="px-3 py-1 bg-gray-700 text-white uppercase tracking-wider"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="px-3 py-1 bg-gray-700 text-white uppercase tracking-wider"
        >
          About
        </Link>
      </nav>
      <div className="flex items-center space-x-5">
        <p className="tracking-wider text-blue-100">{name}</p>
        <button className="bg-gray-700 text-white p-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Navbar;
