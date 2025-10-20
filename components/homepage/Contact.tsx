const Contact = () => {
  return (
    <div className="pt-[120px] pb-[120px] md:pb-auto md:pt-auto bg-white">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className=" text-[38px] md:text-[60px] mb-[16px] lg:text-[73px] text-start font-nm-medium font-medium leading-[41px] lg:leading-[65px] text-black w-auto tracking-normal">
            Let’s Talk Real Estate
          </h1>

          <p className="text-[18px] md:text-[24px] text-start font-nm-book text-[#383838] tracking-normal w-auto lg:w-[692px] mt-2 lg:mt-4 lg:leading-[30px] mb-3  lg:mb-[64px]">
            Reach out today to discuss your real estate goals with a trusted
            professional in Southern Nevada.
          </p>

          <div className="flex justify-between gap-x-[20px] gap[60px]">
            <div className="">
              <div className="bg-[#F2EEED] rounded-[5px]">
                <form className="px-8 py-12 w-[535px]">
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
                Marci Metzger - THE RIDGE REALTY GROUP
              </h5>

              <p className="text-[18px]  lg:text-[24px] text-start font-nm-book mb-[24px] text-[#383838] tracking-normal w-auto ">
                (206) 919-6886
              </p>

              <h5 className="text-[24px] text-start font-nm-medium font-medium  text-[#3383838] mb-[8px] tracking-normal">
                Office Hours
              </h5>

              <p className="text-[18px]  lg:text-[24px] mb-[16px] text-start font-nm-book text-[#383838] tracking-normal w-auto ">
                Mon - Sun &nbsp; 08:00 am – 07:00 pm
              </p>

              <div className="relative text-right w-[565] h-[360px] rounded-5 ">
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
