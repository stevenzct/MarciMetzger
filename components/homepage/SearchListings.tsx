import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const SearchListings = () => {
  return (
    <div className="pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] md:pb-auto ">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[48px]">
            <div className="h-full w-full ">
              <figure className="relative flex flex-col items-center ">
                <Image
                  src="/images/searchListings/image1.jpg"
                  className="rounded-[5px] object-cover w-full h-full"
                  alt="search-listings"
                  width={536}
                  height={693}
                />
                <figcaption className=" absolute bottom-12  w-auto  lg:w-[442px] px-2 py-2 md:px-4 md:py-4">
                  <h1 className=" text-[38px] md:text-[60px] lg:text-[71px] p-4 md:p-auto text-center md:text-start font-nm-medium font-medium leading-[41px] lg:leading-[65px] text-white  tracking-normal">
                    Find your Dream Home
                  </h1>
                </figcaption>
              </figure>
            </div>
            <div className=" w-full h-full">
              <h1 className="mt-[40px] md:mt-[0] text-[38px] md:text-[60px] lg:text-[52px] text-center font-nm-medium font-medium leading-[41px] lg:leading-[65px] text-black tracking-normal mb-[24px]">
                Search Listings
              </h1>

              <div className="bg-[#F2EEED] rounded-[5px]">
                <form className="px-8 py-12">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-black dark:text-white"
                    >
                      Location
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>

                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-black dark:text-white mt-4"
                    >
                      Type
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>

                    <label
                      htmlFor="email"
                      className="block mb-2 text-[18px] font-medium text-black dark:text-white mt-4"
                    >
                      Sort by
                    </label>

                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>Least Expensive to Most</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-[18px] font-medium text-black dark:text-white mt-4"
                        >
                          Bedrooms
                        </label>

                        <div className="mt-2 grid grid-cols-1">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-[18px] font-medium text-black dark:text-white mt-4"
                        >
                          Bathrooms
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-[18px] font-medium text-black dark:text-white mt-4"
                        >
                          Min Price
                        </label>

                        <div className="mt-2 grid grid-cols-1">
                          <input
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          ></input>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-[18px] font-medium text-black dark:text-white mt-4"
                        >
                          Max Price
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                          <input className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></input>
                        </div>
                      </div>
                    </div>

                    <button className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-[#010101] mb-8 py-2 pr-8 pl-3 text-base text-white sm:text-sm/6 mt-[32px]">
                      Search Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchListings;
