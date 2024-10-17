import { Link } from "react-router-dom";
import "../App.css";
import SectionButton from "../components/SectionButton";
import Title from "../components/Title";

function Home() {
  return (
    <>
      <Title />
      <div className="grid grid-cols-3 gap-5">
        <Link to={"Classic-Shop"}>
          <SectionButton text="Classic Shop" />
        </Link>
        <Link to={"Leaderboard"}>
          <SectionButton text="Leaderboard" />
        </Link>
        <Link to={"Stock-Market"}>
          <SectionButton text="Stock Market" />
        </Link>
      </div>
    </>
  );
}

export default Home;
