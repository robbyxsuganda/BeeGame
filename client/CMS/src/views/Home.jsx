import ButtonAddGame from "../components/ButtonAddGame";
import CardGames from "../components/CardGames";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        {/* Game Management Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Semua Game</h2>
            <ButtonAddGame />
          </div>
          <CardGames />
        </section>
      </main>
    </>
  );
}
