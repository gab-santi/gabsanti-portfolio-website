import styles from "../styles";
import React from "react";
import ContactMe from "./ContactMe";
import { portrait } from "../assets";
import { languages } from "../constants";

{
  /* Hero component */
}
const Hero = () => (
  // main section
  <section id="home" className="flex md:flex-row flex-col sm:py-0 py-6">
    {/* subheader section */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row">
        <p className={`${styles.paragraph}`}>
          <span>👋🏻 Hello, world!</span>
        </p>
      </div>

      {/* main header section */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
          My name is
        </h1>

        {/* <div className="ss:flex hidden md:mr-4 mr-0">
          <ContactMe />
        </div> */}
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-sky-600 ss:leading-[100px] leading-[75px] w-full">
        Gab Santiago.
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I am a Data Engineer by profession. On the side, I like dabbling with
        different technologies. 👨🏻‍💻
      </p>

      <div className="flex flex-wrap flex-row justify-between-items-center w-full mt-10">
        {languages.map((language, index) => (
          <div
            key={language.id}
            id={index}
            className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mr-3"
          >
            <p className={`${styles.languageLabel}`}>
              <span className="text-white">{language.text}</span>
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={portrait}
        alt="portrait"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
    </div>

    {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <ContactMe />
    </div> */}
  </section>
);

export default Hero;
