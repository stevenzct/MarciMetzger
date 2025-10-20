import Image from "next/image";
import styles from "./Hero.module.css";

const Services = () => {
  return (
    <div
      className={`${styles["hero-section"]} pt-[120px] pb-[120px] md:pb-auto md:pt-auto`}
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className=" text-[38px] md:text-[60px] mb-[64px] lg:text-[73px] text-center font-nm-medium font-medium leading-[41px] lg:leading-[65px] text-black w-auto tracking-normal">
            Our Services
          </h1>

          <div className="flex justify-between gap-x-[20px] gap[20px]">
            <div className="">
              <div className="max-w-sm bg-white rounded-[5px]">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/images/services/1.png"
                    alt=""
                  />
                </a>
                <div className="p-5 pb-8">
                  <a href="#">
                    <h5 className="text-[24px] text-start font-nm-medium font-medium  text-black  tracking-normal">
                      Real Estate Done Right
                    </h5>
                  </a>
                  <p className="text-[18px]  text-start font-nm-book text-[#383838] tracking-normal w-auto ">
                    Nervous about your property adventure? Don’t be. Whether
                    you're getting ready to buy or sell your residence, looking
                    at investment properties, or just curious about the markets,
                    our team ensures you get the best experience possible!
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="max-w-sm bg-white rounded-[5px]">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/images/services/2.png"
                    alt=""
                  />
                </a>
                <div className="p-5 pb-8">
                  <a href="#">
                    <h5 className="text-[24px] text-start font-nm-medium font-medium  text-black  tracking-normal">
                      Commercial & Residential
                    </h5>
                  </a>
                  <p className="text-[18px]  text-start font-nm-book text-[#383838] tracking-normal w-auto ">
                    Nervous about your property adventure? Don’t be. Whether
                    you're getting ready to buy or sell your residence, looking
                    at investment properties, or just curious about the markets,
                    our team ensures you get the best experience possible!
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="max-w-sm bg-white rounded-[5px]">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/images/services/3.png"
                    alt=""
                  />
                </a>
                <div className="p-5 pb-8">
                  <a href="#">
                    <h5 className="text-[24px] text-start font-nm-medium font-medium  text-black  tracking-normal">
                      Rely on Expertise
                    </h5>
                  </a>
                  <p className="text-[18px]  text-start font-nm-book text-[#383838] tracking-normal w-auto ">
                    If you have questions about affordability, credit, and loan
                    options, trust us to connect you with the right people to
                    get the answers you need in a timely fashion. We make sure
                    you feel confident and educated every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Services;
