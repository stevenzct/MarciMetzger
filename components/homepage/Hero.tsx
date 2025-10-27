import styles from "./Hero.module.css";
import Button from "../Button";
import HeroCards from "../HeroCards";
import Link from "next/link"

const hero = () => {
  return (
    <div
      className={`${styles["hero-section"]} pt-[120px] md:pb-[120px] pb-[80px]  md:pt-[160px]`}
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[48px]">
            <div className="mt-auto lg:mt-[120px]">
              <h1
                className={`${styles["hero-headline"]} text-[38px] md:text-[60px] lg:text-[73px] text-start font-nm-medium font-medium leading-[41px] md:leading-[60px] lg:leading-[65px] text-black w-auto tracking-normal`}
              >
                Luxury Living Starts in Pahrump
              </h1>
              <p className="text-[18px] md:text-[24px] text-start font-nm-book text-[#383838] tracking-normal w-auto mt-2 lg:mt-4 lg:leading-[35px] mb-3  lg:mb-[32px]">
                With Nearly 3 Decades of Experience, Marci Metzger and The Ridge
                Realty Group Bring You Home with Confidence
              </p>
              <Link href="#searchListings" passHref>
                <Button type="button" title="Find Properties" className="mb-[32px]" />
              </Link>
            </div>

            <div>
              <HeroCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
