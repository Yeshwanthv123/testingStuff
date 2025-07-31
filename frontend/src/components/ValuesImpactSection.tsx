import React from 'react';
import { valuesData } from '../data/values';

export function ValuesSection() {
  return (
    <section className="text-black bg-white box-border min-h-screen outline-[oklab(0.708_0_0_/_0.5)]">
      <div className="relative box-border outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden">
        <div className="absolute bg-[linear-gradient(oklch(0.985_0.002_247.839)_0%,rgb(255,255,255)_100%)] box-border outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
        <div className="relative box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 py-20 md:px-[21px] md:py-32">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
            <h1 className="text-[31.5px] font-bold box-border tracking-[-0.7875px] leading-[35px] outline-[oklab(0.708_0_0_/_0.5)] mb-[21px] md:text-[52.5px] md:tracking-[-1.3125px] md:leading-[52.5px] md:mb-7">Our Values & Impact</h1>
            <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] max-w-[784px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:text-[17.5px]">
              Discover the principles that guide our work and our commitment to creating a sustainable future through technology and community action.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[oklch(0.985_0.002_247.839)] box-border outline-[oklab(0.708_0_0_/_0.5)] py-20 md:py-32">
        <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:px-[21px]">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center mb-[42px] md:mb-14">
            <h2 className="text-[26.25px] font-bold box-border leading-[31.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:text-[31.5px] md:leading-[35px]">Our Values</h2>
            <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)] px-3.5 md:text-[17.5px]">The principles that guide our work and shape our platform</p>
          </div>
          <div className="box-border gap-x-[21px] grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-[21px] md:gap-x-[42px] md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-[42px]">
            {valuesData.map((value) => (
              <div key={value.id} className="text-[oklch(0.145_0_0)] bg-white box-border gap-x-[21px] flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-[21px] p-7 rounded-[12.75px]">
                <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
                  <div className="items-center bg-black box-border flex h-14 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-14 mb-[21px] rounded-[3.35544e+07px]">
                    <img src={value.icon} alt="Icon" className="text-white box-border h-7 outline-[oklab(0.708_0_0_/_0.5)] w-7" />
                  </div>
                  <h3 className="text-[21px] font-bold box-border leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-[21px]">{value.title}</h3>
                  <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

