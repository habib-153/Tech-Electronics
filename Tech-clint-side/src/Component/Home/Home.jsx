import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import BenefitOfTech from "./BenefitOfTech/BenefitOfTech";
import Brands from "./Brands/Brands";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <BenefitOfTech></BenefitOfTech>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
