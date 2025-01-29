export default function GameCategories() {
  return (
    <>
      {/* Game Categories */}
      <section className="container mx-auto px-4 py-12 bg-white shadow-lg rounded-xl">
        {/* Category Tabs */}
        <div className="flex space-x-4 mb-8">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
            <i className="fas fa-desktop mr-2" />
            Game PC
          </button>
          <button className="px-8 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
            <i className="fas fa-mobile-alt mr-2" />
            Game Mobile
          </button>
        </div>
        {/* PC Games Grid */}
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
        {/* Mobile Games Grid (Hidden by default) */}
        <div className="hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src="https://via.placeholder.com/150" alt="PUBG Mobile" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">Mobile Game</div>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">PUBG Mobile</h3>
              <p className="text-sm text-gray-600 mb-4">Tencent Games</p>
              <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src="https://via.placeholder.com/150" alt="Mobile Legends" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">Mobile Game</div>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Mobile Legends</h3>
              <p className="text-sm text-gray-600 mb-4">Moonton</p>
              <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src="https://via.placeholder.com/150" alt="Free Fire" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">Mobile Game</div>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Free Fire</h3>
              <p className="text-sm text-gray-600 mb-4">Garena</p>
              <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src="https://via.placeholder.com/150" alt="Genshin Impact" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">Mobile Game</div>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Genshin Impact</h3>
              <p className="text-sm text-gray-600 mb-4">miHoYo</p>
              <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src="https://via.placeholder.com/150" alt="Call of Duty Mobile" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">Mobile Game</div>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Call of Duty Mobile</h3>
              <p className="text-sm text-gray-600 mb-4">Activision</p>
              <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src="https://via.placeholder.com/150" alt="Arena of Valor" className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">Mobile Game</div>
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Arena of Valor</h3>
              <p className="text-sm text-gray-600 mb-4">Tencent Games</p>
              <button className="text-sm bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">Top Up</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
