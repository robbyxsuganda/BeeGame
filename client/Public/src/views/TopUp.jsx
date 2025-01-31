import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { rupiah } from "../helpers/rupiah";
import Swal from "sweetalert2";

export default function TopUp() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [vouchers, setVouchers] = useState([]);
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

  const fetchVoucher = async () => {
    setLoading(true);
    try {
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:3000/vouchers",
      });

      // console.log(data);

      setVouchers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGame();
    fetchVoucher();
  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.access_token}`,
    },
  };

  async function handleBuy() {
    try {
      const { data } = await axios(`http://localhost:3000/payment/midtrans`, config);

      console.log(data, "kiko");

      window.snap.pay(data.transaction_token, {
        onSuccess: async function () {
          const response = await axios.patch(`http://localhost:3000/payment/status`, { orderId: data.orderId }, config);
          Swal.fire({
            icon: "success",
            title: response.data.message,
          });
        },
        onPending: function () {
          Swal.fire({
            icon: "warning",
            title: "Waiting your payment!",
          });
        },
        onError: function () {
          Swal.fire({
            icon: "error",
            title: "Payment failed!",
          });
        },
        onClose: function () {
          Swal.fire({
            icon: "question",
            title: "Cancel payment?",
          });
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  }

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
                <img src={game?.image} alt={game?.name} className="w-32 h-32 rounded-lg object-cover" />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{game?.title}</h1>
                  <p className="text-gray-600 mb-4">{game?.developer}</p>
                </div>
              </div>
            </div>
            {/* Top Up Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Voucher</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {/* Vouchers */}
                    {vouchers.map((voucher) => (
                      <label key={voucher?.id} className="relative">
                        <input type="radio" name="diamonds" defaultValue={86} className="peer hidden" />
                        <div className="border-2  border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50">
                          <div className="flex items-center space-x-2 mb-2">
                            <i className="fas fa-ticket-alt text-blue-500" />
                            <span className="font-semibold">{voucher?.name}</span>
                          </div>
                          <p className="text-blue-600 font-bold">{rupiah(voucher?.price)}</p>
                          {/* Proceed Button */}
                          <div className="mt-8">
                            <button
                              onClick={handleBuy}
                              type="submit"
                              className="w-full cursor-pointer bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Buy
                            </button>
                          </div>
                        </div>
                      </label>
                    ))}
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
