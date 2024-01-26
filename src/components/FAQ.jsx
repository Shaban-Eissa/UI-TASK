import { useState } from "react";

import Close from "./Icons/Close";
import Open from "./Icons/Open";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "How does the process work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis eu arcu sagittis, id sagittis justo suscipit.",
    },
    {
      question: "How are sales many transferred and delivery fees paid?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis eu arcu sagittis, id sagittis justo suscipit.",
    },
    {
      question: "Can I use the system as a point of sale?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis eu arcu sagittis, id sagittis justo suscipit.",
    },
    {
      question: "What happens if the order does not reach the customer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis eu arcu sagittis, id sagittis justo suscipit.",
    },
  ];

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-[1170px] flex-col items-center mt-10 max-md:max-w-full">
        <div className="text-neutral-800 text-center text-4xl font-bold whitespace-nowrap">
          You ask, we answer
        </div>
        <div className="text-gray-500 text-center text-lg w-[600px] mt-6 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          turpis eu arcu sagittis, id sagittis justo suscipit.
        </div>
        <div className="rounded-xl overflow-hidden bg-violet-100 self-stretch flex flex-col items-stretch mt-14 max-md:max-w-full max-md:mt-10">
          {questions.map((item, index) => (
            <div key={index}>
              <div
                className={`${
                  index !== questions.length - 1 &&
                  "border-b-[1px] border-gray-400"
                } ${
                  activeIndex === index ? "bg-gray-300" : "bg-gray-100"
                } flex flex-col items-stretch px-10 py-9 max-md:max-w-full max-md:px-5`}
                onClick={() => handleClick(index)}
              >
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-neutral-800text-2xl font-medium lowercase grow shrink basis-auto my-auto">
                    <span className="font-semibold">{item.question}</span>
                  </div>
                  <div>
                    {activeIndex === index ? (
                      <div className="cursor-pointer bg-violet-600 p-2 rounded-full">
                        <Close />
                      </div>
                    ) : (
                      <div className="cursor-pointer bg-white p-2 rounded-full">
                        <Open />
                      </div>
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="text-neutral-800 text-base leading-6 max-md:max-w-full">
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
