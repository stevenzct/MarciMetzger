import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="about pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] bg-white"
    >
      <div className="container-wrapper w-full h-auto">
        <div className="app-container lg:w-[75%] max-w-[1200px] w-auto mx-6 md:mx-12 lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <Image
              src="/images/about/profile.jpg"
              alt="About Image"
              width={500}
              className="rounded-[5px]"
              height={500}
            />
            <div>
              <h1 className="text-[32px]  md:text-[52px] text-start  mb-4 mt-[32px] md:mt-[0] md:mb-16 lg:mb-[16px] font-nm-medium font-medium text-black w-auto leading-[30px] md:leading-20 lg:leading-[77px]">
                Marci Metzger
              </h1>
              <p className="text-lead md:text-[24px] font-nm-book text-[#383838] leading-normal md:leading-[29px] pb-4">
                Marci was a REALTOR, then licensed Broker, in Washington State.
                Now, she is enjoying the sunshine, and helping clients in
                Southern Nevada. Having helped buyers and sellers in many
                markets since 1995, she is a wealth of knowledge.
              </p>

              <p className="text-lead md:text-[24px] font-nm-book text-[#383838] leading-normal md:leading-[29px]">
                "I love that small-town feeling that our community offers.
                Spectacular golf courses, parks, pool, and easy access to Las
                Vegas make Pahrump a great place to call home. Working or
                retired, fast-paced or looking to relax... there's a place for
                you here!I enjoy living in the Mountain Falls community and will
                strive to find you a home that will suit you just as this
                community does me."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
