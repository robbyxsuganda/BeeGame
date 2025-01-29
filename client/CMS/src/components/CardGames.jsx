import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../features/games/games-slice";
import { useNavigate } from "react-router";
import axios from "axios";
import Toastify from "toastify-js";
import gifLoading from "../assets/Pulse-1s-284px.svg";

export default function CardGames() {
  const { games, loading, error } = useSelector((state) => state.gamesReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Toastify({
        text: `${error}`,
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff416c, #ff4b2b)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  }, [error]);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `http://localhost:3000/games/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      // console.log(data);

      dispatch(fetchAsync());

      Toastify({
        text: `${data.message}`,
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <>
        <section className="flex justify-center items-center">
          <img src={gifLoading} />
        </section>
      </>
    );
  }

  return (
    <>
      {/* Game Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Game Card with Management Options */}
        {games?.map((game) => (
          <div key={game?.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img src={game?.image} alt={game?.title} className="w-full h-40 object-cover" />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{game?.Category?.name}</div>
              {/* Management Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <button className="bg-blue-500 cursor-pointer text-white p-2 rounded-full hover:bg-blue-600" onClick={() => navigate(`/edit-game/${game?.id}`)} title="Edit Game">
                  <i className="fas fa-edit" />
                </button>
                <button className="bg-green-500 cursor-pointer text-white p-2 rounded-full hover:bg-green-600" title="Change Image">
                  <i className="fas fa-image" />
                </button>
                <button className="bg-red-500 cursor-pointer text-white p-2 rounded-full hover:bg-red-600" onClick={() => handleDelete(game?.id)} title="Delete Game">
                  <i className="fas fa-trash" />
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-gray-800">{game?.title}</h3>
            <p className="text-sm text-gray-600">{game?.developer}</p>
            <div className="mt-2 text-sm text-gray-500">{game?.updatedAt}</div>
          </div>
        ))}
        {/* More game cards will be dynamically added here */}
      </div>
    </>
  );
}
