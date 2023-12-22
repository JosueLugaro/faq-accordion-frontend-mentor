import Card from './components/Card'
import './App.css';

function App() {
  const desktopBackground = process.env.PUBLIC_URL + "/images/background-pattern-desktop.svg"
  console.log(process.env.PUBLIC_URL, 'PUBLIC URL')
  console.log(desktopBackground, 'DESKTOP')

  return (
    <div className="bg-[#F9F0FF] h-screen">
      <div className="bg-mobile-background sm:bg-desktop-background w-screen h-[232px] sm:h-[320px]"/>
      <div className="mx-auto mt-[-120px] p-3 max-w-[550px] w-full z-10 relative">
        <Card header="This is the header"/>
      </div>
    </div>
  );
}

export default App;
