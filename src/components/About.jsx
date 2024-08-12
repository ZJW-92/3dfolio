import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduktion</p>
        <h2 className={styles.sectionHeadText}>Om mig</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-3xl leading-[35px]'
      >
       ⭑ Jag bemöter människor med artighet och respekt. <br/>
       ⭑ Jag har god fysik och gillar att lyfta vikter. <br/>
       ⭑ Jag är aktivt och trivs att arbeta i team och självständigt.<br/>
       ⭑ Jag är noggrann, stresstålig, självmotiverad med en stark vilja att lära mig nya färdigheter.<br/>
       ⭑ Jag är ansvarsfull, disciplinerad, organiserad, tar mina egna initiativ och lyder alla villkor på jobbet.<br/>
       ⭑ Jag har stor passion och siktar på att söka nya utmaningar. <br/>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
