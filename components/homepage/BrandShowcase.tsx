import styles from "./Hero.module.css";
import Image from "next/image";

const BrandShowcase = () => {
  return (
    <div
      className={`${styles["hero-section"]} pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] md:pb-auto md:pt-auto`}
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full">
              <Image
                src="/images/brandShowcase/1.jpg"
                alt="brandShowcase"
                className="rounded-[5px] w-full h-auto"
                width={285}
                height={236}
              />
            </div>

            <div className="w-full">
              <Image
                src="/images/brandShowcase/2.png"
                alt="brandShowcase"
                className="rounded-[5px] w-full h-auto"
                width={285}
                height={236}
              />
            </div>

            <div className="w-full">
              <Image
                src="/images/brandShowcase/3.jpg"
                alt="brandShowcase"
                className="rounded-[5px] w-full h-auto"
                width={285}
                height={236}
              />
            </div>

            <div className="w-full">
              <Image
                src="/images/brandShowcase/4.jpg"
                alt="brandShowcase"
                className="rounded-[5px] w-full h-auto"
                width={285}
                height={236}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BrandShowcase;
