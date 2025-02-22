import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../features/games/games-slice";
import { useNavigate } from "react-router";
import axios from "axios";
import Toastify from "toastify-js";
import gifLoading from "../assets/Pulse-1s-284px.svg";
import { baseUrl } from "../../../Public/api/baseUrl";

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
        url: baseUrl`/games/${id}`,
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

  const handleUpload = async (e, id) => {
    try {
      const file = e.target.files[0];

      // console.log(file, "ini loh");

      if (!file) return;

      let formData = new FormData();
      formData.append("file", file);

      const { data } = await axios({
        method: "PATCH",
        url: baseUrl + `/games/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: formData,
      });

      dispatch(fetchAsync());

      Toastify({
        text: `${data.message}`,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    } catch (error) {
      Toastify({
        text: `${error.response.data.message}`,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #ff416c, #ff4b2b)",
        },
      }).showToast();
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {/* Game Card with Management Options */}
        {games?.map((game) => (
          <div key={game?.id} className="bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative overflow-hidden rounded-t-xl">
              <img src={game?.image} alt={game?.title} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
              <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">{game?.Category?.name}</div>
              {/* Management Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transform transition hover:scale-110 shadow-lg" onClick={() => navigate(`/edit-game/${game?.id}`)} title="Edit Game">
                  <i className="fas fa-edit" />
                </button>
                <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transform transition hover:scale-110 shadow-lg" onClick={() => handleDelete(game?.id)} title="Delete Game">
                  <i className="fas fa-trash" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl text-gray-800 mb-2">{game?.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <i className="fas fa-code-branch mr-2"></i>
                {game?.developer}
              </p>
              <div className="text-xs text-gray-500 mb-4">
                <i className="far fa-clock mr-2"></i>
                {new Date(game?.updatedAt).toLocaleDateString()}
              </div>
              <input type="file" id={`uploadFile${game?.id}`} className="hidden" onChange={(e) => handleUpload(e, game?.id)} accept="image/*" />
              <label
                htmlFor={`uploadFile${game?.id}`}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg cursor-pointer hover:from-purple-600 hover:to-purple-700 transition duration-300 shadow-md"
              >
                <i className="fas fa-camera mr-2"></i>
                Ganti Gambar
              </label>
            </div>
          </div>
        ))}
        {/* More game cards will be dynamically added here */}
      </div>
    </>
  );
}
