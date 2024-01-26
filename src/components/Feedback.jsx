import Rating from "./Icons/Rating";

import ProfilePic1 from "../assets/Ellipse4.svg";
import ProfilePic2 from "../assets/Ellipse5.svg";

const Feedback = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-[1146px] flex-col items-center mt-10 max-md:max-w-full">
        <div className="text-violet-600 text-center text-4xl font-bold max-md:max-w-full">
          Our users are <span className="text-violet-600">Happy & Healthy</span>
        </div>
        <div className="text-gray-500 text-center text-lg w-[600px] mt-6 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          turpis eu arcu sagittis, id sagittis justo suscipit.
        </div>
        <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col justify-evenly items-stretch w-[34%] max-md:w-full max-md:ml-0">
              <div className="shadow-lg bg-white flex w-full grow flex-col items-stretch mx-auto p-6 rounded-xl max-md:mt-8 max-md:px-5">
                <div className="flex gap-2">
                  <Rating />
                  <Rating />
                  <Rating />
                </div>
                <div className="text-neutral-800 text-base leading-6 mt-6">
                  “I get all my e-commerce services through Mawsool app. now I
                  never have to waste my time going to a designer and sitting
                  around the social media apps!”
                </div>
                <div className="flex items-stretch justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    srcSet={ProfilePic2}
                    className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="flex grow basis-[0%] flex-col items-stretch whitespace-nowrap my-auto">
                    <div className="text-zinc-800 text-lg font-medium leading-6">
                      Ahmed Alali
                    </div>
                    <div className="text-stone-500 text-sm mt-2.5">
                      consulting engineer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-lg bg-white flex w-full grow flex-col items-stretch mx-auto p-6 rounded-xl max-md:mt-8 max-md:px-5">
                <div className="flex gap-2">
                  <Rating />
                  <Rating />
                  <Rating />
                </div>
                <div className="text-neutral-800 text-base leading-6 mt-6">
                  “I get all my e-commerce services through Mawsool app. now I
                  never have to waste my time going to a designer and sitting
                  around the social media apps!”
                </div>
                <div className="flex items-stretch justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    srcSet={ProfilePic1}
                    className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="flex grow basis-[0%] flex-col items-stretch whitespace-nowrap my-auto">
                    <div className="text-zinc-800 text-lg font-medium leading-6">
                      Turky Bader
                    </div>
                    <div className="text-stone-500 text-sm mt-1.5">
                      consulting engineer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-evenly items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-lg bg-white flex w-full grow flex-col items-stretch mx-auto p-6 rounded-xl max-md:mt-8 max-md:px-5">
                <div className="flex gap-2">
                  <Rating />
                  <Rating />
                  <Rating />
                </div>
                <div className="text-neutral-800 text-base leading-6 mt-6">
                  “I get all my e-commerce services through Mawsool app. now I
                  never have to waste my time going to a designer and sitting
                  around the social media apps!”
                </div>
                <div className="flex items-stretch justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    srcSet={ProfilePic2}
                    className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="flex grow basis-[0%] flex-col items-stretch whitespace-nowrap my-auto">
                    <div className="text-zinc-800 text-lg font-medium leading-6">
                      Turky Bader
                    </div>
                    <div className="text-stone-500 text-sm mt-1.5">
                      consulting engineer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
