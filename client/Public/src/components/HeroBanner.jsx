export default function HeroBanner() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Top Up Game Favoritmu
                <br />
                Dengan Mudah &amp; Aman
              </h2>
              <p className="text-xl text-blue-100">Nikmati pengalaman top up game terbaik dengan harga terjangkau dan proses instan!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
