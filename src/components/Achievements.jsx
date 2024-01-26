const Achievements = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-[1079px] flex-col items-stretch mt-20 mb-12 max-md:max-w-full max-md:my-10">
        <div className="text-neutral-800 text-center text-4xl font-bold self-center whitespace-nowrap">
          Our achievement
        </div>
        <div className="text-gray-500 text-center text-lg self-center max-w-[600px] mt-8 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
          leo et ligula auctor sodales in non orci.
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="items-center flex grow flex-col">
            <div className="text-violet-600 text-5xl font-bold whitespace-nowrap max-md:text-4xl">
              20,500+
            </div>
            <div className="text-gray-500 text-center text-base font-medium self-center whitespace-nowrap mt-3">
              Orders last month
            </div>
          </div>
          <div className="items-center flex grow flex-col">
            <div className="text-violet-600 text-5xl font-bold whitespace-nowrap max-md:text-4xl">
              4.8/5
            </div>
            <div className="text-gray-500 text-center text-base font-medium whitespace-nowrap mt-3">
              Satisfaction Rate
            </div>
          </div>
          <div className="items-center flex grow flex-col">
            <div className="text-violet-600 text-5xl font-bold whitespace-nowrap max-md:text-4xl">
              12,300+
            </div>
            <div className="text-gray-500 text-center text-base font-medium self-center whitespace-nowrap mt-3">
              Cooks
            </div>
          </div>
          <div className="items-center flex grow flex-col">
            <div className="text-violet-600 text-5xl font-bold whitespace-nowrap max-md:text-4xl">
              12,300+
            </div>
            <div className="text-gray-500 text-center text-base font-medium max-sm:self-center whitespace-nowrap mt-3">
              Cooks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
