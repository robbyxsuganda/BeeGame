import { Link } from "react-router";

export default function PopulerGames() {
  return (
    <>
      {/* Popular Games */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Game Populer</h2>
          <Link to="/games" className="text-blue-600 hover:text-blue-700">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/150" alt="Mobile Legends" className="w-full rounded-lg mb-3" />
            <h3 className="font-semibold text-gray-800">Mobile Legends</h3>
            <p className="text-sm text-gray-600">Moonton</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/150" alt="PUBG Mobile" className="w-full rounded-lg mb-3" />
            <h3 className="font-semibold text-gray-800">PUBG Mobile</h3>
            <p className="text-sm text-gray-600">Tencent Games</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/150" alt="Free Fire" className="w-full rounded-lg mb-3" />
            <h3 className="font-semibold text-gray-800">Free Fire</h3>
            <p className="text-sm text-gray-600">Garena</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/150" alt="Genshin Impact" className="w-full rounded-lg mb-3" />
            <h3 className="font-semibold text-gray-800">Genshin Impact</h3>
            <p className="text-sm text-gray-600">miHoYo</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/150" alt="Valorant" className="w-full rounded-lg mb-3" />
            <h3 className="font-semibold text-gray-800">Valorant</h3>
            <p className="text-sm text-gray-600">Riot Games</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/150" alt="Call of Duty" className="w-full rounded-lg mb-3" />
            <h3 className="font-semibold text-gray-800">Call of Duty</h3>
            <p className="text-sm text-gray-600">Activision</p>
          </div>
        </div>
      </section>
    </>
  );
}
