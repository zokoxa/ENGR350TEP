import Hero from "./components/Hero";
import { Fragment } from "react/jsx-runtime";
import LookingGlass from "./components/LookingGlass";
import ExpandableCards from "./components/Cards";
import Video from "./components/Video";
import Footer from "./components/Footer";
import CountdownTimer from "./components/Timer";
import "./App.css";
function App() {
  document.title = "TikTok vs Douyin";
  document.body.style.backgroundColor = "#FE2C55";

  return (
    <Fragment>
      <CountdownTimer></CountdownTimer>
      <Hero></Hero>
      <LookingGlass></LookingGlass>
      <ExpandableCards></ExpandableCards>
      <Video></Video>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
