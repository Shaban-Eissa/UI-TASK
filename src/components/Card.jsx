import Location from "./Icons/Location";
import Rating from "./Icons/Rating";

const Card = ({ rating, category, businessName, description, location }) => (
  <div className="shadow-lg bg-white flex flex-col items-stretch pb-4 rounded-xl mb-4">
    <div className="bg-orange-100 flex w-full flex-col pl-4 pr-16 pt-4 pb-12 rounded-xl items-start max-md:pr-5">
      <div className="items-stretch rounded bg-white flex w-[68px] max-w-full gap-1 mb-24 px-2 py-1 max-md:mb-10">
        <Rating />
        <div className="text-neutral-800 text-base font-medium leading-5 self-center grow whitespace-nowrap my-auto">
          {rating}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-stretch mt-5 px-4">
      <div className="text-violet-600 text-sm font-medium whitespace-nowrap">
        {category}
      </div>
      <div className="text-neutral-800 text-lg font-semibold whitespace-nowrap mt-2">
        {businessName}
      </div>
      <div className="text-gray-500 text-sm mt-3">{description}</div>
      <div className="flex items-stretch justify-between gap-2 mt-3">
        <Location />
        <div className="text-neutral-800 text-sm leading-6 self-center grow whitespace-nowrap my-auto">
          {location}
        </div>
      </div>
      <div className="text-neutral-800 text-right text-base leading-6 whitespace-nowrap justify-center items-stretch rounded border border-[color:var(--02---Dark-Color---Gray---100,#EEE)] bg-white mt-5 px-16 py-3 border-solid max-md:px-6">
        View Full Profile
      </div>
    </div>
  </div>
);

export default Card;
