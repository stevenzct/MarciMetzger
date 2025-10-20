import Image from "next/image";
const PropertyShowcase = () => {
  return (
    <div className="pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] md:pb-auto md:pt-auto bg-[#F7F4F4]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className=" text-[38px] md:text-[60px] mb-[16px] lg:text-[73px] text-center font-nm-medium font-medium leading-[41px] lg:leading-[65px] text-black w-auto tracking-normal">
            Property Showcase
          </h1>

          <p className="text-[18px] md:text-[24px] text-center font-nm-book text-[#383838] tracking-normal w-auto mt-2 lg:mt-4 lg:leading-[35px] mb-[32px]  lg:mb-[64px]">
            Explore some of Southern Nevada’s most desirable residences
          </p>

          <div className="flex justify-between gap-x-[20px] gap[20px]">
            <div className="">
              <figure className="relative flex flex-col items-start ">
                <Image
                  src="/images/propertyShowcase/1.jpg"
                  alt="propertyShowcase1"
                  className="rounded-[5px]"
                  width={387}
                  height={476}
                />
                <figcaption className=" absolute bottom-8  w-auto ">
                  <h1 className="  text-[32px] text-start font-nm-medium font-medium ms-[32px] leading-[41px] lg:leading-[65px] text-white  tracking-normal">
                    Sierra Sol Estate
                  </h1>
                </figcaption>
              </figure>
            </div>

            <div className="hidden md:block">
              <figure className="relative flex flex-col items-start ">
                <Image
                  src="/images/propertyShowcase/2.jpg"
                  alt="propertyShowcase2"
                  className="rounded-[5px]"
                  width={387}
                  height={476}
                />
                <figcaption className=" absolute bottom-8  w-auto ">
                  <h1 className="  text-[32px] text-start font-nm-medium font-medium ms-[32px] leading-[41px] lg:leading-[65px] text-white  tracking-normal">
                    Canyonview Retreat
                  </h1>
                </figcaption>
              </figure>
            </div>

            <div className="hidden md:block">
              <figure className="relative flex flex-col items-start ">
                <Image
                  src="/images/propertyShowcase/3.jpg"
                  alt="propertyShowcase3"
                  className="rounded-[5px]"
                  width={387}
                  height={476}
                />
                <figcaption className=" absolute bottom-8  w-auto ">
                  <h1 className="  text-[32px] text-start font-nm-medium font-medium ms-[32px] leading-[41px] lg:leading-[65px] text-white  tracking-normal">
                    Sandridge Manor
                  </h1>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="flex justify-end gap-[16px] mt-[32px]">
            <button
              type="button"
              className="text-black bg-white rounded-[5px]   text-sm px-[28px] py-[16px] "
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.2544 7.66455C3.16003 7.75756 3.10645 7.88423 3.10542 8.01673C3.10438 8.14923 3.15598 8.27671 3.24888 8.37119L7.21755 12.4023C7.26294 12.4518 7.31783 12.4916 7.37895 12.5194C7.44007 12.5472 7.50616 12.5624 7.57328 12.5641C7.64041 12.5658 7.70719 12.554 7.76964 12.5293C7.83209 12.5047 7.88894 12.4677 7.93679 12.4206C7.98464 12.3735 8.02251 12.3172 8.04814 12.2552C8.07377 12.1931 8.08664 12.1265 8.08598 12.0594C8.08532 11.9922 8.07114 11.9259 8.04429 11.8644C8.01745 11.8028 7.97848 11.7473 7.92971 11.7011L4.80769 8.53003L14.2674 8.60384C14.4 8.60487 14.5276 8.55319 14.6221 8.46015C14.7166 8.36712 14.7703 8.24036 14.7713 8.10775C14.7723 7.97515 14.7206 7.84757 14.6276 7.75307C14.5346 7.65857 14.4078 7.6049 14.2752 7.60387L4.81549 7.53006L7.98661 4.40804C8.0361 4.36265 8.07593 4.30776 8.10373 4.24664C8.13154 4.18552 8.14675 4.11943 8.14846 4.0523C8.15016 3.98518 8.13834 3.9184 8.11368 3.85595C8.08901 3.79349 8.05203 3.73665 8.00492 3.6888C7.95781 3.64095 7.90155 3.60308 7.83949 3.57745C7.77743 3.55182 7.71084 3.53895 7.6437 3.53961C7.57656 3.54027 7.51023 3.55445 7.44869 3.58129C7.38715 3.60814 7.33164 3.64711 7.28548 3.69588L3.2544 7.66455Z"
                  fill="black"
                />
              </svg>
            </button>

            <button
              type="button"
              className="text-black bg-white rounded-[5px]  text-sm px-[28px] py-[16px] "
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.071 7.84802C14.1676 7.94327 14.2225 8.07296 14.2235 8.20863C14.2246 8.34429 14.1718 8.47483 14.0767 8.57157L10.0131 12.6991C9.9666 12.7497 9.91039 12.7905 9.84781 12.819C9.78523 12.8474 9.71756 12.863 9.64883 12.8648C9.5801 12.8665 9.51173 12.8544 9.44778 12.8292C9.38383 12.8039 9.32563 12.766 9.27663 12.7178C9.22764 12.6696 9.18887 12.612 9.16262 12.5484C9.13638 12.4849 9.1232 12.4167 9.12387 12.3479C9.12455 12.2792 9.13907 12.2113 9.16656 12.1483C9.19405 12.0853 9.23395 12.0284 9.28388 11.9812L12.4806 8.7342L2.79462 8.80978C2.65885 8.81084 2.52821 8.75792 2.43145 8.66266C2.3347 8.5674 2.27974 8.4376 2.27869 8.30183C2.27763 8.16605 2.33055 8.03542 2.4258 7.93866C2.52106 7.8419 2.65086 7.78695 2.78663 7.78589L12.4726 7.71032L9.22562 4.51363C9.17495 4.46716 9.13417 4.41095 9.1057 4.34837C9.07723 4.28579 9.06165 4.21812 9.0599 4.14939C9.05815 4.08066 9.07027 4.01229 9.09552 3.94834C9.12077 3.88439 9.15864 3.82619 9.20687 3.77719C9.25511 3.7282 9.31272 3.68943 9.37626 3.66318C9.43981 3.63694 9.50799 3.62376 9.57673 3.62443C9.64548 3.62511 9.71339 3.63963 9.77641 3.66712C9.83942 3.69461 9.89625 3.73451 9.94352 3.78444L14.071 7.84802Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PropertyShowcase;
