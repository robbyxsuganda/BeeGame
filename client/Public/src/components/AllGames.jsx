export default function AllGames() {
  return (
    <>
      {/* Popular Games */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Semua Game</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img src="https://via.placeholder.com/150" alt="Valorant" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">PC Game</div>
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Valorant</h3>
            <p className="text-sm text-gray-600 mb-4">Riot Games</p>
            <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img src="https://via.placeholder.com/150" alt="PUBG" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">PC Game</div>
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">PUBG</h3>
            <p className="text-sm text-gray-600 mb-4">Tencent Games</p>
            <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img src="https://via.placeholder.com/150" alt="Genshin Impact" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">PC Game</div>
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Genshin Impact</h3>
            <p className="text-sm text-gray-600 mb-4">miHoYo</p>
            <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img src="https://via.placeholder.com/150" alt="Call of Duty" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">PC Game</div>
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Call of Duty</h3>
            <p className="text-sm text-gray-600 mb-4">Activision</p>
            <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img src="https://via.placeholder.com/150" alt="Mobile Legends" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">PC Game</div>
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Mobile Legends</h3>
            <p className="text-sm text-gray-600 mb-4">Moonton</p>
            <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img src="https://via.placeholder.com/150" alt="Free Fire" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">PC Game</div>
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Free Fire</h3>
            <p className="text-sm text-gray-600 mb-4">Garena</p>
            <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
          </div>
        </div>
      </section>
    </>
  );
}
