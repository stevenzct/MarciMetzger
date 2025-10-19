import styles from "./Expertise.module.css";
import { expertise } from "../../constants/expertise";
import Image from "next/image";

const Expertise = () => {
  return (
    <div
      className={`${styles["expertise-section"]} pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px]`}
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className="text-[32px] md:text-7xl lg:text-[73px] text-center mb-[16px] font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
            Get it Sold!
          </h1>
          <div className="flex justify-center">
            <p className="text-lead w-[699px] mb-[64px] md:text-[24px] text-center font-nm-book text-[#222222] leading-normal md:leading-[29px]">
            From pricing precision to closing expertise, your property is
            represented with integrity, strategy, and confidence.
          </p>
          </div>

          <div className="expertise-content">
            <div className="expertise-wrapper">
              <div className="expertise-card grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                {expertise.map(({ imageSrc, imageAlt, title, description }) => (
                  <div
                    key={`${imageSrc}-${title}`}
                    className="max-w-full p-6 lg:p-8 lg:px-6 rounded-[5px] bg-white"
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      className="mb-[16px]"
                      width={90}
                      height={90}
                    />
                    <h2 className="text-[24px] font-nm-medium font-medium">{title}</h2>
                    <p className="text-[20px] font-nm-book text-[#383838] leading-snug">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
