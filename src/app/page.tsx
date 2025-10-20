import About from "../../components/homepage/About";
import BrandShowcase from "../../components/homepage/BrandShowcase";
import Expertise from "../../components/homepage/Expertise";
import Hero from "../../components/homepage/Hero";
import SearchListings from "../../components/homepage/SearchListings";

export default function Home() {
  return (
    <div className="homepage-wrapper">
      <Hero/>
      <About/>
      <Expertise/>
      <SearchListings/>
      <BrandShowcase/>
    </div>
  );
}
