import React from "react";

const Timer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h6 className="text-sm font-medium mb-1">Days</h6>
          <div className="flex items-center gap-4">
            <h2 className="text-[32px] leading-7 font-bold tracking-[4%]">
              03
            </h2>
            <div>
              <div className="h-1 w-1 rounded-full bg-[#E07575] mb-2"></div>
              <div className="h-1 w-1 rounded-full bg-[#E07575]"></div>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-sm font-medium mb-1">Hours</h6>
          <div className="flex items-center gap-4">
            <h2 className="text-[32px] leading-7 font-bold tracking-[4%]">
              03
            </h2>
            <div>
              <div className="h-1 w-1 rounded-full bg-[#E07575] mb-2"></div>
              <div className="h-1 w-1 rounded-full bg-[#E07575]"></div>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-sm font-medium mb-1">Minutes</h6>
          <div className="flex items-center gap-4">
            <h2 className="text-[32px] leading-7 font-bold tracking-[4%]">
              03
            </h2>
            <div>
              <div className="h-1 w-1 rounded-full bg-[#E07575] mb-2"></div>
              <div className="h-1 w-1 rounded-full bg-[#E07575]"></div>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-sm font-medium mb-1">Seconds</h6>
          <h2 className="text-[32px] leading-7 font-bold tracking-[4%]">03</h2>
        </div>
      </div>
    </>
  );
};

export default Timer;
