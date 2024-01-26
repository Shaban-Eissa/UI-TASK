import HeaderImage from "../assets/header-image.png";
import Market from "./Icons/Market";
import Location from "./Icons/Location";
import BottomArrow from "./Icons/BottomArrow";
import RotatedArrow from "./Icons/RotatedArrow";

const Header = () => {
  return (
    <div className="relative flex justify-center">
      <img
        loading="lazy"
        src={HeaderImage}
        className="absolute h-full w-full object-cover object-center"
      />
      <div className="relative bg-black bg-opacity-40 flex w-full flex-col justify-center items-center max-md:px-[18px]">
        <div className="flex w-[790px] max-w-full flex-col mt-20 mb-1.5 max-md:mt-10">
          <div className="text-white text-center text-6xl font-bold w-full max-md:text-2xl leading-22">
            The first productive families app
          </div>
          <div className="flex gap-2 justify-center items-center mt-14 max-md:max-w-full max-md:mt-10">
            <div className="w-[600px] max-sm:w-[300px] border bg-white flex items-center justify-between gap-5 px-6 py-4 rounded-[500px] border-solid border-neutral-200 max-md:max-w-full max-md:px-0 max-md:py-2">
              <div className="w-full flex items-stretch gap-3 my-auto">
                <Market />
                <div className="text-gray-500 text-base self-center grow whitespace-nowrap my-auto">
                  <input
                    placeholder="Search for store"
                    className="
                    w-full
                    text-neutral-800
                    placeholder-neutral-400
                    border-none
                    outline-none
                    bg-transparent
                  "
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="max-w-full" />
                <Location />
                <div className="text-neutral-800 text-center text-base font-medium self-center my-auto">
                  Riyadh
                </div>
                <BottomArrow />
              </div>
            </div>
            <div className=" bg-violet-600 flex justify-center px-8 py-4 rounded-[50px] max-md:px-2 max-md:py-2">
              <div className="items-center flex justify-between gap-2">
                <div className="text-white text-lg font-bold leading-6 grow whitespace-nowrap">
                  Search
                </div>
                <RotatedArrow />
              </div>
            </div>
          </div>
          <div className="text-white text-center text-xl font-semibold leading-6 self-center whitespace-nowrap mt-36 max-md:mt-10">
            Or explore Mawsool
          </div>
          <div className="flex justify-center items-center gap-1 mb-12 bg-white self-center w-[197px] max-w-full mt-6 px-8 py-4 rounded-[50px] max-md:px-2 max-md:py-2">
            <div className="text-violet-600 text-base font-medium">
              All categories
            </div>

            <RotatedArrow color="violet-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
