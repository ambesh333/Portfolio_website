import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { social } from "../constants";


const FeedbackCard = ({
  index,
  icon,
  title,
  url,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
   <div
        className=' rounded-[20px]  flex justify-evenly items-center flex-col'
        onClick={() => window.open(url, "_blank")}
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
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Follow my profiles on GitHub Linkedin and twitter </p>
          <h2 className={styles.sectionHeadText}>Lets get social.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {social.map((social, index) => (
          <FeedbackCard key={social.name} index={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");