import Salla from "../assets/Salla.svg";
import Zed from "../assets/Zed.svg";
import Sm from "../assets/SM.svg";
import TIDIO from "../assets/TIDIO.svg";
import Visa from "../assets/VISA.svg";
import Pay from "../assets/Pay.svg";
import Mada from "../assets/mada.svg";

const Partnerships = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-[1189px] flex-col items-center mt-10 max-md:max-w-full">
        <div className="text-neutral-800 text-center text-4xl font-bold whitespace-nowrap">
          Our partnerships
        </div>
        <div className="text-gray-500 text-center text-lg w-[600px] mt-6 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          turpis eu arcu sagittis, id sagittis justo suscipit.
        </div>
        <div className="flex justify-evenly items-center flex-wrap mt-8 gap-12">
          <img
            loading="lazy"
            src={Salla}
            className="max-md:max-w-full max-md:mt-10"
          />

          <img
            loading="lazy"
            src={Zed}
            className="max-md:max-w-full max-md:mt-10"
          />
          <img
            loading="lazy"
            src={Sm}
            className="max-md:max-w-full max-md:mt-10"
          />
          <img
            loading="lazy"
            src={TIDIO}
            className="max-md:max-w-full max-md:mt-10"
          />
          <img
            loading="lazy"
            src={Visa}
            className="max-md:max-w-full max-md:mt-10"
          />
          <img
            loading="lazy"
            src={Pay}
            className="max-md:max-w-full max-md:mt-10"
          />
          <img
            loading="lazy"
            src={Mada}
            className="max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
