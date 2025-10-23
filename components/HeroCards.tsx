"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroCards = () => {
  return (
    <div className="h-[404px] md:h-[610px] relative">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="h-full">
          <figure className="relative flex flex-col items-center h-full">
            <Image
              src="/images/hero/hero-cards/image1.jpg"
              alt="Hero Card 1"
              fill
              className="object-cover rounded-lg"
            />
            <figcaption className="absolute bottom-8 inline-flex flex-row flex-nowrap gap-4 justify-between items-center rounded-[5px] bg-[rgba(143,143,143,0.54)] px-2 py-2 md:px-4 md:py-4 text-white">
              <Image
                className="rounded-[5px]"
                src="/images/hero/hero-cards/image1.1.jpg"
                alt="Hero Card 1.1"
                width={100}
                height={100}
              />
              <div className="flex flex-col text-start">
                <span className="text-[18px] md:text-[24px] font-nm-book">
                  Hacienda Retreat
                </span>
                <span className="text-[16px] font-nm-book">
                  $100,000 - Marbella Lane
                </span>
              </div>
              <Image
                src="/images/hero/hero-cards/icon-circle.jpg"
                alt="icon-circle"
                width={35}
                height={35}
                className="rounded-full"
              />
            </figcaption>
          </figure>
        </SwiperSlide>

        <SwiperSlide className="h-full flex items-center justify-center">
          <figure className="relative flex flex-col items-center h-full">
            <Image
              src="/images/hero/hero-cards/image2.png"
              alt="Hero Card 2"
              fill
              className="object-cover rounded-lg"
            />
            <figcaption className="absolute bottom-8 inline-flex flex-row flex-nowrap gap-4 justify-between items-center rounded-[5px] bg-[rgba(143,143,143,0.54)] px-2 py-2 md:px-4 md:py-4 text-white">
              <Image
                className="rounded-[5px]"
                src="/images/hero/hero-cards/image2.png"
                alt="Hero Card 2"
                width={100}
                height={100}
              />
              <div className="flex flex-col text-start">
                <span className="text-[18px] md:text-[24px] font-nm-book">
                  Casa Solana
                </span>
                <span className="text-[16px] font-nm-book">
                  $100,000 - Palmcrest Way
                </span>
              </div>
              <Image
                src="/images/hero/hero-cards/icon-circle.jpg"
                alt="icon-circle"
                width={35}
                height={35}
                className="rounded-full"
              />
            </figcaption>
          </figure>
        </SwiperSlide>

        <SwiperSlide className="h-full flex items-center justify-center">
          <figure className="relative flex flex-col items-center h-full">
            <Image
              src="/images/hero/hero-cards/image3.png"
              alt="Hero Card 3"
              fill
              className="object-cover rounded-lg"
            />
            <figcaption className="absolute bottom-8 inline-flex flex-row flex-nowrap gap-4 justify-between items-center rounded-[5px] bg-[rgba(143,143,143,0.54)] px-2 py-2 md:px-4 md:py-4 text-white">
              <Image
                className="rounded-[5px]"
                src="/images/hero/hero-cards/image3.png"
                alt="Hero Card 3"
                width={100}
                height={100}
              />
              <div className="flex flex-col text-start">
                <span className="text-[18px] md:text-[24px] font-nm-book">
                  Villa Sereno
                </span>
                <span className="text-[16px] font-nm-book">
                  $100,000 - Serene Path
                </span>
              </div>
              <Image
                src="/images/hero/hero-cards/icon-circle.jpg"
                alt="icon-circle"
                width={35}
                height={35}
                className="rounded-full"
              />
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCards;
