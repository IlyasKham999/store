import "./App.css";
import Header from "./components/Header";
import ForManWom from "./components/ForManWom";
import Maps from "./components/Maps";
import RecommendedCollection from "./components/RecommendedCollection";
import SocialNetwork from "./components/SocialNetwork";
import SubscriptionNews from "./components/SubscriptionNews";
import Footer from "./components/Footer";
import HeaderBurger from "./components/HeaderBurger";
import { useSelector } from "react-redux";

function App() {
  const burger = useSelector((state) => state.burger.burger);

  return (
    <div>
      {burger === false ? <HeaderBurger></HeaderBurger> : <Header></Header>}
      <div>
        <ForManWom></ForManWom>
        <Maps></Maps>
        <RecommendedCollection></RecommendedCollection>
        <SocialNetwork></SocialNetwork>
        <SubscriptionNews></SubscriptionNews>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
