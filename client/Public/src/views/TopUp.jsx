import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function TopUp() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchGame = async () => {
    setLoading(true);
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:3000/pub/${id}`,
      });
      // console.log(data);

      setGame(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGame();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {loading ? (
          <>
            <div className="col-span-full text-center py-8">Loading...</div>
          </>
        ) : (
          <>
            {/* Game Info */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-start space-x-6">
                <img src="https://via.placeholder.com/150" alt="Mobile Legends" className="w-32 h-32 rounded-lg object-cover" />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{game?.title}</h1>
                  <p className="text-gray-600 mb-4">{game?.developer}</p>
                </div>
              </div>
            </div>
            {/* Top Up Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Player Info */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Player Information</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1"> Player ID </label>
                      <input type="text" placeholder="Enter your Player ID" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required="" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1"> Server ID </label>
                      <input type="text" placeholder="Enter your Server ID" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required="" />
                    </div>
                  </form>
                </div>
              </div>
              {/* Right Column - Denomination Selection */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Diamond Package</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {/* Diamond Packages */}
                    <label className="relative">
                      <input type="radio" name="diamonds" defaultValue={86} className="peer hidden" />
                      <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="fas fa-gem text-blue-500" />
                          <span className="font-semibold">86 Diamonds</span>
                        </div>
                        <p className="text-blue-600 font-bold">Rp 20.000</p>
                      </div>
                    </label>
                    <label className="relative">
                      <input type="radio" name="diamonds" defaultValue={172} className="peer hidden" />
                      <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="fas fa-gem text-blue-500" />
                          <span className="font-semibold">172 Diamonds</span>
                        </div>
                        <p className="text-blue-600 font-bold">Rp 39.000</p>
                      </div>
                    </label>
                    <label className="relative">
                      <input type="radio" name="diamonds" defaultValue={257} className="peer hidden" />
                      <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="fas fa-gem text-blue-500" />
                          <span className="font-semibold">257 Diamonds</span>
                        </div>
                        <p className="text-blue-600 font-bold">Rp 59.000</p>
                      </div>
                    </label>
                    <label className="relative">
                      <input type="radio" name="diamonds" defaultValue={344} className="peer hidden" />
                      <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="fas fa-gem text-blue-500" />
                          <span className="font-semibold">344 Diamonds</span>
                        </div>
                        <p className="text-blue-600 font-bold">Rp 78.000</p>
                      </div>
                    </label>
                    <label className="relative">
                      <input type="radio" name="diamonds" defaultValue={429} className="peer hidden" />
                      <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="fas fa-gem text-blue-500" />
                          <span className="font-semibold">429 Diamonds</span>
                        </div>
                        <p className="text-blue-600 font-bold">Rp 98.000</p>
                      </div>
                    </label>
                    <label className="relative">
                      <input type="radio" name="diamonds" defaultValue={514} className="peer hidden" />
                      <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                        <div className="flex items-center space-x-2 mb-2">
                          <i className="fas fa-gem text-blue-500" />
                          <span className="font-semibold">514 Diamonds</span>
                        </div>
                        <p className="text-blue-600 font-bold">Rp 117.000</p>
                      </div>
                    </label>
                  </div>
                  {/* Payment Method */}
                  <div className="mt-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <label className="relative">
                        <input type="radio" name="payment" defaultValue="bca" className="peer hidden" />
                        <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                          <img src="https://via.placeholder.com/80x40" alt="BCA" className="h-8 object-contain mx-auto" />
                        </div>
                      </label>
                      <label className="relative">
                        <input type="radio" name="payment" defaultValue="mandiri" className="peer hidden" />
                        <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                          <img src="https://via.placeholder.com/80x40" alt="Mandiri" className="h-8 object-contain mx-auto" />
                        </div>
                      </label>
                      <label className="relative">
                        <input type="radio" name="payment" defaultValue="gopay" className="peer hidden" />
                        <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                          <img src="https://via.placeholder.com/80x40" alt="GoPay" className="h-8 object-contain mx-auto" />
                        </div>
                      </label>
                      <label className="relative">
                        <input type="radio" name="payment" defaultValue="ovo" className="peer hidden" />
                        <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                          <img src="https://via.placeholder.com/80x40" alt="OVO" className="h-8 object-contain mx-auto" />
                        </div>
                      </label>
                    </div>
                  </div>
                  {/* Proceed Button */}
                  <div className="mt-8">
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Continue to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
