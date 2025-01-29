import { useNavigate } from "react-router";
import Toastify from "toastify-js";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
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
    navigate("/login");
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <h1 onClick={() => navigate("/")} className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                BeeGame CMS
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input type="text" placeholder="Search games..." className="w-64 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-4 top-2.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <button onClick={handleLogout} className="flex cursor-pointer items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2H4V5h4a1 1 0 1 0 0-2H3zm12.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
