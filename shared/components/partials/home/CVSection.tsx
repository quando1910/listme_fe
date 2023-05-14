import React from "react";
import Image from "next/image";

const CVSection = () => {
  return (
    <div className="container py-10">
      <div className="rounded-3xl p-6 bg-ink-300 relative overflow-hidden">
        <div className="mb-9">
          <h3 className="text-subTitle text-ink-600 mb-2">
            Start your journey by making CV
          </h3>
          <p className="text-sm font-semibold">
            Use ListMe and give the journey of your life the jumpstart you
            deserve!
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-4 border-primary bg-secondary py-6 pl-7 pr-12 flex items-center flex-col sm:flex-row justify-between max-w-[612px] min-h-[164px] cursor-pointer">
          <div className="relative z-10 flex items-center mb-12">
            <div className="mr-2.5">
              <h3 className="text-subTitle text-primary mb-1.5">
                Create new CV
              </h3>
              <p className="text-sm text-primary text-light -mt-1">
                Our CV builder will help you!
              </p>
            </div>
            <Image
              src="/images/cv-paper.png"
              alt="cv-paper"
              width={80}
              height={50}
            />
          </div>

          <div className="relative z-10 w-[66px] h-[66px] flex-shrink-0 rounded-full shadow-button flex items-center justify-center bg-primary">
            <Image
              src="/images/icons/plus.svg"
              alt="plus"
              width={22}
              height={22}
              priority
            />
          </div>

          <Image className="absolute -top-[196px] right-[110px] rotate-[67deg] brightness-75 hidden md:block" src="/images/bg-pattern.png" alt="pattern" width={270} height={600} />
        </div>

        <Image className="absolute -top-[111px] right-[68px] z-10 -rotate-[22deg] hidden lg:block brightness-75" src="/images/bg-pattern.png" alt="pattern" width={425} height={800} />
      </div>
    </div>
  );
};

export default CVSection;
