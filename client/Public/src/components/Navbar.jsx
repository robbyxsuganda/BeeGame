import { Link, NavLink, useNavigate } from "react-router";
import Toastify from "toastify-js";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    Toastify({
      text: "Logout Success",
      duration: 3000,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    navigate("/");
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <h1 onClick={() => navigate("/")} className="text-2xl cursor-pointer font-bold text-blue-600">
                BeeGame
              </h1>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-600 flex items-center")}>
                      <i className="fas fa-home mr-2" />
                      Beranda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/games" className={({ isActive }) => (isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-600 flex items-center")}>
                      <i className="fas fa-gamepad mr-2" />
                      Semua Game
                    </NavLink>
                  </li>
                  {localStorage.access_token && (
                    <li>
                      <NavLink to="/transaction" className={({ isActive }) => (isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-600 flex items-center")}>
                        <i className="fas fa-money-check-alt mr-2" />
                        Transaction
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input type="text" placeholder="Cari game favoritmu..." className="w-64 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <i className="fas fa-search absolute right-4 top-3 text-gray-400" />
              </div>
              <div className="flex items-center space-x-4">
                {localStorage.getItem("access_token") ? (
                  <>
                    <div onClick={handleLogout} className="cursor-pointer text-gray-600 hover:text-blue-600">
                      <i className="fas fa-sign-out-alt mr-2" />
                      Logout
                    </div>
                    <Link to="/profile" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <i className="fas fa-user-circle mr-2" />
                      Profile
                    </Link>
                  </>
                ) : (
                  <Link to="/login" className="text-gray-600 hover:text-blue-600 flex items-center">
                    <i className="fas fa-user mr-2" />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
