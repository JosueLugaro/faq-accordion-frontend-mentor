import './App.css';

function App() {
  const desktopBackground = process.env.PUBLIC_URL + "/images/background-pattern-desktop.svg"

  return (
    <div className="bg-[#F9F0FF] h-screen">
      <img className="w-screen" src={desktopBackground} alt="background art"/>
    </div>
  );
}

export default App;
