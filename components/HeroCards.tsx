import Image from "next/image";

const HeroCards = () => {
  return (
    <div>
      <div className="h-[404px] md:h-[610px] relative">
        <figure className="flex flex-col items-center">
          <Image
            src="/images/hero/hero-cards/image1.jpg"
            alt="Hero Card 1"
            fill
            className="object-cover rounded-lg"
          />
          <figcaption className="absolute bottom-8  inline-flex flex-row flex-nowrap gap-4 justify-between items-center content-center rounded-[5px] bg-[rgba(143,143,143,0.54)] px-2 py-2 md:px-4 md:py-4 text-white  ">
            <Image
              className="rounded-[5px]"
              src="/images/hero/hero-cards/image1.1.jpg"
              alt="Hero Card 1.1"
              width={100}
              height={100}
            />
            <div className="flex flex-col">
              <span className="text-[18px] md:text-[24px] w-full font-nm-book text-center text-white">
              Hacienda Retreat
            </span>
            <span className="text-[16px] font-nm-book text-center text-white">
              $100, 000 - Marbella Lane
            </span>
            </div>
            <Image
              src="/images/hero/hero-cards/icon-circle.jpg"
              alt="icon-circle"
              className="w-[35px] h-[35px] rounded-full"
              width={100}
              height={100}
            />
          </figcaption>
        </figure>
      </div>

    </div>
  );
};

export default HeroCards;
