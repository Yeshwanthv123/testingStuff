import React from 'react';
import { impactItems } from '../data/impact';

export function ImpactSection() {
  return (
    <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] py-20 md:py-32 min-h-screen flex items-center bg-white">
      <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:px-[21px] w-full">
        <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center mb-[42px] md:mb-14">
          <h2 className="text-[26.25px] font-bold box-border leading-[31.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:text-[31.5px] md:leading-[35px]">Our Impact</h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)] px-3.5 md:text-[17.5px]">Dedicated to making sustainability achievable for everyone</p>
        </div>
        <div className="items-center box-border gap-x-7 grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-7 md:gap-x-14 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-14">
          {impactItems.map((item) => (
            <div key={item.id} className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
              <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] mb-[35px] md:mb-[42px]">
                <h3 className="text-[21px] font-bold box-border leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:mb-[21px]">{item.title}</h3>
                <p className="text-[oklch(0.373_0.034_259.733)] text-[15.75px] box-border leading-[25.5938px] outline-[oklab(0.708_0_0_/_0.5)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[oklch(0.967_0.003_264.542)] box-border outline-[oklab(0.708_0_0_/_0.5)] p-7 rounded-[8.75px] md:p-[42px]">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
            <h3 className="text-[21px] font-bold box-border leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-[21px] md:text-[26.25px] md:leading-[31.5px] md:mb-7">Environmental Commitment</h3>
            <p className="text-[oklch(0.446_0.03_256.802)] text-sm box-border leading-[22.75px] max-w-[392px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto md:text-[15.75px] md:leading-[25.5938px]">
              We're committed to transparency, scientific accuracy, and making environmental action accessible to everyone. Our platform is built on the latest climate science and designed with sustainability at its core.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
