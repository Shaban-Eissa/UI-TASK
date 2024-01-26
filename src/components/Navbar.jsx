import HomeLogo from "./Icons/HomeLogo";
import Arrow from "./Icons/Arrow";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between bg-white px-16 py-2 border-b-gray-200 border-b border-solid max-md:px-5">
      <HomeLogo />
      <div className="self-center flex items-stretch justify-between gap-5 my-auto">
        <div className="cursor-pointer text-violet-600 text-base font-medium leading-5 self-center">
          Log in
        </div>
        <div className="flex justify-between gap-2 bg-violet-600 px-4 py-3.5 rounded-[50px]">
          <div className="cursor-pointer text-white font-medium leading-5 grow whitespace-nowrap">
            Get Started
          </div>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
