import Aboutlockyourland from "../components/Home/Aboutlockyourland";
import ExcitingPlaces from "../components/Home/ExcitingPlaces";
import Lockyourland from "../components/Home/Lockyourland";
import PropertyListing from "../components/Home/PropertyListing";

import SecureProperty from "../components/Home/SecureProperty";

const Home = () => {
  return (
    <>
      <Lockyourland />
      <SecureProperty />
      <Aboutlockyourland />
      <PropertyListing />
      <ExcitingPlaces />
    </>
  );
};

export default Home;
