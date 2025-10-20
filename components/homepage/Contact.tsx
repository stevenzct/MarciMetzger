const Contact = () => {
  return (
    <div className="pt-[120px] pb-[120px] md:pb-auto md:pt-auto bg-[#F7F4F4]">
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <h1 className=" text-[38px] md:text-[60px] mb-[16px] lg:text-[73px] text-start font-nm-medium font-medium leading-[41px] lg:leading-[65px] text-black w-auto tracking-normal">
            Let’s Talk Real Estate
          </h1>

          <p className="text-[18px] md:text-[24px] text-start font-nm-book text-[#383838] tracking-normal w-auto lg:w-[692px] mt-2 lg:mt-4 lg:leading-[30px] mb-3  lg:mb-[64px]">
            Reach out today to discuss your real estate goals with a trusted
            professional in Southern Nevada.
          </p>

          <div className="flex justify-between gap-x-[20px] gap[20px]">
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

            <div className=""></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
