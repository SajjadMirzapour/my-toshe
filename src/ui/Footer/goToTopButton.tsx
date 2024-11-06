"use client";

import Arrow from "/public/icons/left.svg";

const GoToTopButton = () => {
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <>
      <button
        className="flex absolute w-10 h-10 bg-[#2e81ff] rounded-[50%] sm:left-[50%] left-[46%] top-[80%] z-[3]"
        onClick={goToTop}
      >
        <Arrow className="m-auto justify-center rotate-90" />
      </button>
      <div className="animate-ping-slow absolute w-10 h-10 bg-[rgba(46,129,255,0.2)] rounded-[50%] sm:left-[50%] left-[46%] top-[80%]"></div>
    </>
  );
};

export default GoToTopButton;
