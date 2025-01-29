import { useNavigate } from "react-router";

export default function ButtonAddGame() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/add-game")} className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        <span>Add Game</span>
      </button>
    </>
  );
}
