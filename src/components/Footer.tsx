// placeholder for Footer.tsx
import React from 'react';
import { footerButtons } from '../data/footer';

export function Footer() {
  return (
    <div className="text-white bg-[oklch(0.21_0.034_264.665)] box-border outline-[oklab(0.708_0_0_/_0.5)] py-[42px]">
      <div className="box-border max-w-[784px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-[21px]">
        <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
          <div className="box-border flex justify-center outline-[oklab(0.708_0_0_/_0.5)] mb-7">
            {footerButtons.map((button) => (
              <button key={button.id} className={button.className}>
                {button.label}
              </button>
            ))}
          </div>
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] pt-7 border-t border-solid border-[oklch(0.278_0.033_256.848)]">
            <p className="text-[oklch(0.872_0.01_258.338)] text-[17.5px] font-medium box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)]">
              "Every step towards sustainability is a step towards a better tomorrow."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
