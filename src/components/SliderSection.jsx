import Card from "./Card";
import LeftArrow from "./Icons/LeftArrow";
import RightArrow from "./Icons/RightArrow";

const SliderSection = () => {
  return (
    <div className="bg-white flex flex-col px-6 py-12 max-md:px-5">
      <div className="text-neutral-800 text-center text-4xl font-bold self-center mt-8 max-md:max-w-full">
        <span className="text-violet-600">+20,000</span> Cook & Family
        Enterprise,
      </div>
      <div className="text-gray-500 text-center text-lg self-center max-w-[600px] mt-4 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut leo
        et ligula auctor sodales in non orci.
      </div>
      <div className="flex w-full items-center justify-evenly gap-5 mt-14 mb-8 max-md:flex-wrap max-md:mt-10">
        <div className="max-md:hidden max-lg:hidden object-center bg-red-100 w-[60px] my-auto p-5 rounded-full cursor-pointer border border-blue-500">
          <LeftArrow />
        </div>

        <div className="max-md:max-w-full">
          <div className="gap-5 grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 grid-cols-4 max-md:items-stretch max-md:gap-5">
            <div className="flex flex-col items-stretch max-md:w-full max-lg:w-full max-md:ml-0">
              <Card
                color="red"
                rating="4.7"
                category="Category"
                businessName="Business Name"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut leo..."
                location="Al Sahafah, Riyadh"
              />
            </div>

            <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
              <Card
                color="green"
                rating="4.7"
                category="Category"
                businessName="Business Name"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut leo..."
                location="Al Sahafah, Riyadh"
              />
            </div>

            <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
              <Card
                rating="4.7"
                category="Category"
                businessName="Business Name"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut leo..."
                location="Al Sahafah, Riyadh"
              />
            </div>

            <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
              <Card
                rating="4.7"
                category="Category"
                businessName="Business Name"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut leo..."
                location="Al Sahafah, Riyadh"
              />
            </div>
          </div>
        </div>
        <div className="max-md:hidden max-lg:hidden object-center bg-red-100 w-[60px] my-auto p-5 rounded-full cursor-pointer border border-blue-500">
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
