import Hero from "./components/Hero";
import { Fragment } from "react/jsx-runtime";
import LookingGlass from "./components/LookingGlass";
import ExpandableCards from "./components/Cards";
import Video from "./components/Video";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  document.title = "TikTok vs Douyin";
  document.body.style.backgroundColor = "#FE2C55";

  return (
    <Fragment>
      <Hero></Hero>
      <LookingGlass></LookingGlass>
      <ExpandableCards></ExpandableCards>
      <Video></Video>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
