import "./App.css";
import SectionButton from "./components/SectionButton";

function App() {
  return (
    <>
      <div className="font-[160] text-5xl pb-10">
        <span>Oaklands API Wrapper</span>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <SectionButton text="Classic Shop" />
        <SectionButton text="Leader Board" />
        <SectionButton text="Stock Market" />
      </div>
    </>
  );
}

export default App;
