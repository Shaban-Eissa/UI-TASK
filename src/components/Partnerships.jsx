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
        <div className="mt-8 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <div className="w-full inline-flex flex-nowrap">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <img src={Salla} alt="Facebook" />
              </li>
              <li>
                <img src={Zed} alt="Disney" />
              </li>
              <li>
                <img src={Sm} alt="Airbnb" />
              </li>
              <li>
                <img src={TIDIO} alt="Apple" />
              </li>
              <li>
                <img src={Visa} alt="Spark" />
              </li>
              <li>
                <img src={Pay} alt="Samsung" />
              </li>
              <li>
                <img src={Mada} alt="Quora" />
              </li>
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              <li>
                <img src={Salla} alt="Facebook" />
              </li>
              <li>
                <img src={Zed} alt="Disney" />
              </li>
              <li>
                <img src={Sm} alt="Airbnb" />
              </li>
              <li>
                <img src={TIDIO} alt="Apple" />
              </li>
              <li>
                <img src={Visa} alt="Spark" />
              </li>
              <li>
                <img src={Pay} alt="Samsung" />
              </li>
              <li>
                <img src={Mada} alt="Quora" />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 w-[80%] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <div className="w-full inline-flex flex-nowrap">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <img src={Salla} alt="Facebook" />
              </li>
              <li>
                <img src={Zed} alt="Disney" />
              </li>
              <li>
                <img src={Sm} alt="Airbnb" />
              </li>
              <li>
                <img src={TIDIO} alt="Apple" />
              </li>
              <li>
                <img src={Visa} alt="Spark" />
              </li>
              <li>
                <img src={Pay} alt="Samsung" />
              </li>
              <li>
                <img src={Mada} alt="Quora" />
              </li>
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              <li>
                <img src={Salla} alt="Facebook" />
              </li>
              <li>
                <img src={Zed} alt="Disney" />
              </li>
              <li>
                <img src={Sm} alt="Airbnb" />
              </li>
              <li>
                <img src={TIDIO} alt="Apple" />
              </li>
              <li>
                <img src={Visa} alt="Spark" />
              </li>
              <li>
                <img src={Pay} alt="Samsung" />
              </li>
              <li>
                <img src={Mada} alt="Quora" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partnerships;
