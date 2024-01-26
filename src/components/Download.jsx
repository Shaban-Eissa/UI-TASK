import RotatedArrow from "./Icons/RotatedArrow";
import AppleStore from "./Icons/AppleStore";
import GoogleStore from "./Icons/GoogleStore";

import Iphone from "../assets/iPhone.png";

const Download = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-[1170px] flex-col items-stretch my-8 max-md:max-w-full">
        <div className="max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-16 max-md:max-w-full max-md:mt-10">
                <div className="text-neutral-800 text-4xl font-bold self-stretch max-md:max-w-full">
                  How does it work?
                </div>
                <div className="text-gray-500 text-lg self-stretch mt-8 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent ut leo et ligula auctor sodales in non orci. Nam
                  cursus velit id ante eleifend malesuada. Duis eu massa vel
                  odio porttitor hendrerit
                </div>
                <div className=" bg-violet-600 flex w-[203px] max-w-full flex-col justify-start mt-10 px-7 py-4 rounded-[50px] self-start max-md:px-5">
                  <div className="flex justify-between items-center px-0.5">
                    <div className="text-white text-lg font-bold leading-6 cursor-pointer grow whitespace-nowrap">
                      Get Started
                    </div>
                    <RotatedArrow />
                  </div>
                </div>
                <div className="text-neutral-800 text-2xl flex flex-col gap-3 font-semibold leading-7 self-stretch mt-10 max-md:max-w-full">
                  <span>Download now</span>
                  <div className="flex gap-2">
                    <div>
                      <AppleStore />
                    </div>
                    <div>
                      <GoogleStore />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative max-md:hidden bg-gray-300 rounded-lg mt-20 flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet={Iphone}
                className="max-h-[404px] absolute top-[-40px] roaspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-16 max-md:max-w-full max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:mt-10">
          <div className="flex grow flex-col items-start max-md:mt-8">
            <div className="bg-gray-200 text-violet-600 text-2xl font-bold leading-7 whitespace-nowrap aspect-square justify-center items-stretch px-5 py-3.5 rounded-[50%]">
              1
            </div>
            <div className="text-violet-600 text-2xl font-semibold self-stretch whitespace-nowrap mt-6">
              Get to Mawsool app
            </div>
            <div className="text-gray-500 text-sm leading-5 self-stretch mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ut leo et ligula auctor sodales in non orci. Nam cursus velit id
              ante eleifend malesuada.{" "}
            </div>
          </div>
          <div className="flex grow flex-col items-start max-md:mt-8">
            <div className="border border-solid text-violet-600 text-2xl font-bold leading-7 whitespace-nowrap aspect-square justify-center items-stretch px-5 py-3.5 rounded-[50%]">
              2
            </div>
            <div className="text-gray-600 text-2xl font-semibold self-stretch whitespace-nowrap mt-6">
              Get to Mawsool app
            </div>
            <div className="text-gray-500 text-sm leading-5 self-stretch mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ut leo et ligula auctor sodales in non orci. Nam cursus velit id
              ante eleifend malesuada.{" "}
            </div>
          </div>
          <div className="flex grow flex-col items-start max-md:mt-8">
            <div className="border border-solid text-violet-600 text-2xl font-bold leading-7 whitespace-nowrap aspect-square justify-center items-stretch px-5 py-3.5  rounded-[50%]">
              3
            </div>
            <div className="text-gray-600 text-2xl font-semibold self-stretch whitespace-nowrap mt-6">
              Get to Mawsool app
            </div>
            <div className="text-gray-500 text-sm leading-5 self-stretch mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ut leo et ligula auctor sodales in non orci. Nam cursus velit id
              ante eleifend malesuada.{" "}
            </div>
          </div>
          <div className="flex grow flex-col items-start max-md:mt-8">
            <div className="border border-solid text-violet-600 text-2xl font-bold leading-7 whitespace-nowrap aspect-square justify-center items-stretch px-5 py-3.5 rounded-[50%]">
              4
            </div>
            <div className="text-gray-600 text-2xl font-semibold self-stretch whitespace-nowrap mt-6">
              Get to Mawsool app
            </div>
            <div className="text-gray-500 text-sm leading-5 self-stretch mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ut leo et ligula auctor sodales in non orci. Nam cursus velit id
              ante eleifend malesuada.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
