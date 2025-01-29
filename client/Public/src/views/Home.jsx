import GameCategories from "../components/GameCategories";
import HeroBanner from "../components/HeroBanner";
import PopulerGames from "../components/PopulerGames";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <HeroBanner />
        <PopulerGames />
        <GameCategories />
      </main>
    </>
  );
}
