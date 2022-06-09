import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import InfoCardSection from './InfoCardsSection/InfoCardSection';
import WhoWeAre from './WhoWeAre';
import SummerSurfCamp from './SummerSurfCamp';
import TaskSection from './TaskSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoCardSection />
      <WhoWeAre />
      <SummerSurfCamp />
      <TaskSection colorCode ='#300000'/>
    </>
  );
}

export default App;
