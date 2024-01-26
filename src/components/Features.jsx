import Marketing from "../assets/marketing.png";
import RightMark from "./Icons/RightMark";

const Features = () => {
  return (
    <div className="bg-white flex justify-center items-center px-16 py-12 max-md:px-5">
      <div className="w-full max-w-[1170px] mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-lg:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-violet-600 text-4xl font-bold lowercase max-md:max-w-full">
                Stress-free, We’ll{" "}
                <span className="lowercase text-violet-600">
                  Handle Everything.
                </span>
              </div>
              <div className="text-gray-500 text-lg mt-5 max-md:max-w-full">
                Our app allows you to get the full-service offerings of an
                e-commerce office from the comfort of your home.
              </div>
              <div className="mt-12 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch max-md:mt-10">
                      <div className="flex items-stretch justify-between gap-3">
                        <RightMark />
                        <div className="text-neutral-800 text-base font-medium leading-5 grow shrink basis-auto">
                          Available 24/7
                        </div>
                      </div>
                      <div className="flex items-stretch justify-between gap-3 mt-6">
                        <RightMark />
                        <div className="text-neutral-800 text-base font-medium leading-5 grow whitespace-nowrap">
                          Orders coverage
                        </div>
                      </div>
                      <div className="flex items-stretch justify-between gap-3 mt-6">
                        <RightMark />
                        <div className="text-neutral-800 text-base font-medium leading-5 grow whitespace-nowrap">
                          Reasonable Pricing
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-lg:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="flex items-stretch justify-between gap-3">
                        <RightMark />
                        <div className="text-neutral-800 text-base font-medium leading-5 grow whitespace-nowrap">
                          Digital marketing
                        </div>
                      </div>
                      <div className="flex items-stretch justify-between gap-3 mt-6">
                        <RightMark />
                        <div className="text-neutral-800 text-base font-medium leading-5 grow whitespace-nowrap">
                          Offline/ Online POS
                        </div>
                      </div>
                      <div className="flex items-stretch gap-3 mt-6">
                        <RightMark />
                        <div className="text-neutral-800 text-base font-medium leading-5 capitalize">
                          <span className="capitalize">ch</span>at, phone, video
                          call options
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[57%] ml-5 max-md:w-full max-lg:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet={Marketing}
              className="aspect-[1.37] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
