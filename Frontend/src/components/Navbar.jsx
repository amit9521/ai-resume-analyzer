import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          AI Resume Analyzer
        </Link>

        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;