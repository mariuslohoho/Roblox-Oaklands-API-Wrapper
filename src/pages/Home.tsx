import { Link } from "react-router-dom";
import "../App.css";
import SectionButton from "../components/SectionButton";
import Title from "../components/Title";

function Home() {
  return (
    <>
      <Title fade_in />
      <div className="animate-fade-in grid grid-cols-2 sm:grid-cols-3 gap-5 justify-center content-center w-fit">
        <Link
          to={"Classic-Shop"}
          className="flex justify-center content-center"
        >
          <SectionButton
            text="Classic Shop"
            icon={() => (
              <span className="material-symbols-outlined absolute text-8xl top-5">
                store
              </span>
            )}
          />
        </Link>
        <Link
          to={"leaderboard/TopPlayers"}
          className="flex justify-center content-center"
        >
          <SectionButton
            icon={() => (
              <span className="material-symbols-outlined absolute text-8xl top-5">
                social_leaderboard
              </span>
            )}
            text="Top Players"
          />
        </Link>
        <Link
          to={"Stock-Market"}
          className="flex justify-center content-center"
        >
          <SectionButton text="Stock Market" />
        </Link>
      </div>
    </>
  );
}

export default Home;
