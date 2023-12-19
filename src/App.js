import Card from './components/Card'
import './App.css';

function App() {
  const desktopBackground = process.env.PUBLIC_URL + "/images/background-pattern-desktop.svg"

  return (
    <div className="bg-[#F9F0FF] h-screen">
      <img className="w-screen" src={desktopBackground} alt="background art"/>
      <div className="mx-auto mt-[-120px] p-3 max-w-[550px] w-full z-10 relative">
        <Card header="This is the header"/>
      </div>
    </div>
  );
}

export default App;
