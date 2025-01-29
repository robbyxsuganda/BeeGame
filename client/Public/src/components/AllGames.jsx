import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../features/games/games-slice";
import { useEffect } from "react";
import Toastify from "toastify-js";
import gifLoading from "../assets/Pulse-1s-284px.svg";

export default function AllGames() {
  const { games, loading, error } = useSelector((state) => state.gamesReducer);
  const dispatch = useDispatch();

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
      {/* Popular Games */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Semua Game</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {games?.map((game) => (
            <div key={game?.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src={game?.image} alt="Valorant" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{game?.Category?.name}</div>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{game?.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{game?.developer}</p>
              <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
