import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { joinBenefits } from '../data/benefits';
import { footerButtons } from '../data/footer';

export function JoinSection() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="text-black bg-white box-border outline-[oklab(0.708_0_0_/_0.5)]">
      <div className="relative box-border outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden">
        <div className="absolute bg-[linear-gradient(oklch(0.985_0.002_247.839)_0%,rgb(255,255,255)_100%)] box-border outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
        <div className="relative box-border max-w-[784px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 py-[70px] md:px-[21px] md:py-28">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
            <h1 className="text-[31.5px] font-bold box-border tracking-[-0.7875px] leading-[35px] outline-[oklab(0.708_0_0_/_0.5)] mb-[21px] md:text-[52.5px] md:tracking-[-1.3125px] md:leading-[52.5px] md:mb-7">Join Carbon Counter</h1>
            <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] max-w-2xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:text-[17.5px]">
              Start your journey towards sustainability. Track your carbon footprint, set reduction goals, and join a community committed to environmental change.
            </p>
          </div>
        </div>
      </div>
      <div className="box-border max-w-[784px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 py-14 md:px-[21px] md:py-[70px]">
        <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center mb-7 md:mb-[42px]">
          <div className="bg-black box-border h-[3.5px] outline-[oklab(0.708_0_0_/_0.5)] w-14 mb-[21px] mx-auto md:w-[84px] md:mb-7"></div>
          <h2 className="text-[21px] font-bold box-border leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:text-[26.25px] md:leading-[31.5px]">Ready to Make a Difference?</h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-sm box-border leading-[22.75px] max-w-[588px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:text-[15.75px] md:leading-[25.5938px]">
            Every measurement matters. Every reduction counts. Every individual action contributes to our collective climate solution.
          </p>
        </div>
        <div className="text-[oklch(0.145_0_0)] bg-white box-border gap-x-[21px] flex flex-col max-w-[392px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-[21px] mx-auto p-7 rounded-[12.75px] border-2 border-solid">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center mb-[21px]">
              <h3 className="text-[21px] font-medium box-border tracking-[-0.21px] leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-[7px]">Ready to try?</h3>
              <p className="text-[oklch(0.446_0.03_256.802)] box-border leading-[22.4px] outline-[oklab(0.708_0_0_/_0.5)]">Sign up to reduce your footprint.</p>
            </div>
            <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] mb-[21px]">
              <Link 
                to="/signup"
                className="text-white font-medium items-center bg-black gap-x-[7px] inline-flex shrink-0 h-[31.5px] justify-center outline-[oklab(0.708_0_0_/_0.5)] gap-y-[7px] text-center text-nowrap w-full px-3.5 py-[10.5px] rounded-[6.75px] hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
              <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] box-border leading-[17.5px] outline-[oklab(0.708_0_0_/_0.5)]">Join thousands making a difference, one step at a time.</p>
            </div>
          </div>
        </div>
        <div className="box-border gap-x-[21px] grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-[21px] mt-14 md:gap-x-7 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-7 md:mt-[70px]">
          {joinBenefits.map((benefit) => (
            <div key={benefit.id} className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
              <div className="items-center bg-black box-border flex h-14 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-14 mb-3.5 mx-auto rounded-[3.35544e+07px]">
                <img src={benefit.icon} alt="Icon" className="text-white box-border h-7 outline-[oklab(0.708_0_0_/_0.5)] w-7" />
              </div>
              <h3 className="text-[17.5px] font-semibold box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5">{benefit.title}</h3>
              <p className="text-[oklch(0.446_0.03_256.802)] box-border outline-[oklab(0.708_0_0_/_0.5)]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white bg-[oklch(0.21_0.034_264.665)] box-border outline-[oklab(0.708_0_0_/_0.5)] py-[42px]">
        <div className="box-border max-w-[784px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-[21px]">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
            <div className="box-border flex justify-center outline-[oklab(0.708_0_0_/_0.5)] mb-7">
              <button className="text-[oklch(0.707_0.022_261.325)] font-medium bg-transparent block outline-[oklab(0.708_0_0_/_0.5)] mr-[42px] p-0 hover:text-white">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[oklch(0.707_0.022_261.325)] font-medium bg-transparent block outline-[oklab(0.708_0_0_/_0.5)] mr-[42px] p-0 hover:text-white"
              >
                About
              </button>
              <button className="text-[oklch(0.707_0.022_261.325)] font-medium bg-transparent block outline-[oklab(0.708_0_0_/_0.5)] p-0 hover:text-white">
                Documentation
              </button>
            </div>
            <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] pt-7 border-t border-solid border-[oklch(0.278_0.033_256.848)]">
              <p className="text-[oklch(0.872_0.01_258.338)] text-[17.5px] font-medium box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)]">
                "Every step towards sustainability is a step towards a better tomorrow."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
