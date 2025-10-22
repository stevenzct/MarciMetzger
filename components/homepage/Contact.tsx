const Contact = () => {
  return (
    <div className="pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] md:pb-auto md:pt-auto bg-white">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className=" text-[38px] md:text-[60px] mb-[16px] lg:text-[73px] text-start font-nm-medium font-medium leading-[41px] lg:leading-[65px] text-black w-auto tracking-normal">
            Let’s Talk Real Estate
          </h1>

          <p className="text-[18px] md:text-[24px] text-start font-nm-book text-[#383838] tracking-normal w-auto lg:w-[692px] mt-2 lg:mt-4 lg:leading-[30px] mb-[32px] md:mb-3   lg:mb-[64px]">
            Reach out today to discuss your real estate goals with a trusted
            professional in Southern Nevada.
          </p>

          <div className="flex flex-col lg:flex-row justify-between gap-x-[20px]">
            <div className="">
              <div className="bg-[#F2EEED] rounded-[5px]">
                <form className="px-8 py-12 w-auto lg:w-[535px] mb-[32px] md:mb-0">
                  <p className="text-[18px] md:text-[24px] text-start font-nm-book text-[#383838] tracking-normal w-auto  lg:leading-[35px] mb-[24px]   ">
                    Send a message
                  </p>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-black dark:text-white"
                    >
                      Name
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <input
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      ></input>
                    </div>

                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-black dark:text-white mt-4"
                    >
                      Email
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <input
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      ></input>
                    </div>

                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-black dark:text-white mt-4"
                    >
                      Message
                    </label>

                    <div className="mt-2 grid grid-cols-1">
                      <textarea className="resize-y col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                    </div>

                    <button className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-[#010101] mb-8 py-2 pr-8 pl-3 text-base text-white sm:text-sm/6 mt-[32px]">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="">
              <h5 className="text-[24px] text-start font-nm-medium font-medium  text-[#3383838] mb-[8px] tracking-normal">
                Marci Metzger - The Ridge Realty Group
              </h5>

              <div className="flex items-center gap-x-[8px] mb-[24px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                    fill="#383838"
                  />
                </svg>

                <p className="text-[18px]  lg:text-[24px] text-start font-nm-book  text-[#383838] tracking-normal w-auto ">
                  (206) 919-6886
                </p>
              </div>

              <h5 className="text-[24px] text-start font-nm-medium font-medium  text-[#3383838] mb-[8px] tracking-normal">
                Office Hours
              </h5>

              <div className="flex items-center gap-x-[8px] mb-[24px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_259_247)">
                    <path
                      d="M21.5008 4.00008H18.8342V6.00008C18.8342 6.19268 18.7962 6.3834 18.7225 6.56135C18.6488 6.73929 18.5408 6.90097 18.4046 7.03717C18.2684 7.17336 18.1067 7.28139 17.9288 7.3551C17.7508 7.42881 17.5601 7.46674 17.3675 7.46674C17.1749 7.46674 16.9842 7.42881 16.8062 7.3551C16.6283 7.28139 16.4666 7.17336 16.3304 7.03717C16.1942 6.90097 16.0862 6.73929 16.0125 6.56135C15.9388 6.3834 15.9008 6.19268 15.9008 6.00008V4.00008H8.13416V6.00008C8.13416 6.38906 7.97963 6.76211 7.70458 7.03717C7.42953 7.31222 7.05647 7.46674 6.66749 7.46674C6.27851 7.46674 5.90545 7.31222 5.6304 7.03717C5.35535 6.76211 5.20082 6.38906 5.20082 6.00008V4.00008H2.53416C2.3755 3.99827 2.2181 4.0283 2.07126 4.08838C1.92441 4.14847 1.79111 4.23739 1.67923 4.34989C1.56735 4.4624 1.47917 4.59619 1.4199 4.74336C1.36063 4.89054 1.33147 5.0481 1.33416 5.20674V20.1267C1.33151 20.2826 1.35959 20.4374 1.41679 20.5824C1.47399 20.7274 1.55919 20.8597 1.66753 20.9718C1.77587 21.0838 1.90522 21.1734 2.0482 21.2355C2.19118 21.2975 2.34498 21.3308 2.50082 21.3334H21.5008C21.6567 21.3308 21.8105 21.2975 21.9534 21.2355C22.0964 21.1734 22.2258 21.0838 22.3341 20.9718C22.4425 20.8597 22.5277 20.7274 22.5849 20.5824C22.6421 20.4374 22.6701 20.2826 22.6675 20.1267V5.20674C22.6701 5.0509 22.6421 4.89607 22.5849 4.75108C22.5277 4.60609 22.4425 4.47379 22.3341 4.36174C22.2258 4.24968 22.0964 4.16007 21.9534 4.09802C21.8105 4.03596 21.6567 4.00268 21.5008 4.00008ZM6.66749 17.3334H5.33416V16.0001H6.66749V17.3334ZM6.66749 14.0001H5.33416V12.6667H6.66749V14.0001ZM6.66749 10.6667H5.33416V9.33341H6.66749V10.6667ZM10.6675 17.3334H9.33416V16.0001H10.6675V17.3334ZM10.6675 14.0001H9.33416V12.6667H10.6675V14.0001ZM10.6675 10.6667H9.33416V9.33341H10.6675V10.6667ZM14.6675 17.3334H13.3342V16.0001H14.6675V17.3334ZM14.6675 14.0001H13.3342V12.6667H14.6675V14.0001ZM14.6675 10.6667H13.3342V9.33341H14.6675V10.6667ZM18.6675 17.3334H17.3342V16.0001H18.6675V17.3334ZM18.6675 14.0001H17.3342V12.6667H18.6675V14.0001ZM18.6675 10.6667H17.3342V9.33341H18.6675V10.6667Z"
                      fill="#383838"
                    />
                    <path
                      d="M6.66667 6.66683C6.84348 6.66683 7.01305 6.59659 7.13807 6.47157C7.2631 6.34654 7.33333 6.17697 7.33333 6.00016V2.00016C7.33333 1.82335 7.2631 1.65378 7.13807 1.52876C7.01305 1.40373 6.84348 1.3335 6.66667 1.3335C6.48986 1.3335 6.32029 1.40373 6.19526 1.52876C6.07024 1.65378 6 1.82335 6 2.00016V6.00016C6 6.17697 6.07024 6.34654 6.19526 6.47157C6.32029 6.59659 6.48986 6.66683 6.66667 6.66683Z"
                      fill="black"
                    />
                    <path
                      d="M17.3327 6.66683C17.5095 6.66683 17.6791 6.59659 17.8041 6.47157C17.9291 6.34654 17.9993 6.17697 17.9993 6.00016V2.00016C17.9993 1.82335 17.9291 1.65378 17.8041 1.52876C17.6791 1.40373 17.5095 1.3335 17.3327 1.3335C17.1559 1.3335 16.9863 1.40373 16.8613 1.52876C16.7363 1.65378 16.666 1.82335 16.666 2.00016V6.00016C16.666 6.17697 16.7363 6.34654 16.8613 6.47157C16.9863 6.59659 17.1559 6.66683 17.3327 6.66683Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_259_247">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-[18px]  lg:text-[24px] text-start font-nm-book text-[#383838] tracking-normal w-auto ">
                  Mon - Sun &nbsp; 08:00 am – 07:00 pm
                </p>
              </div>

              <div className="relative text-right w-auto h-auto lg:w-[565] lg:h-[360px] rounded-5 ">
                <iframe
                  className="w-full h-full rounded-5"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=3190 HW-160, Suite F, Pahrump, Nevada 89048, United States&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  title="Google Map"
                ></iframe>
                <a href="https://wheremylocation.com/" className="hidden">
                  my location
                </a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
