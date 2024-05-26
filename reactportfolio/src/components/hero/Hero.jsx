// import './hero.scss'

// const Hero = () => {
//   return (
//     <div className="hero">
//         <div className="wrapper">
//         <div className="textContainer">
//             <h2>SACHIN AGGARWAL</h2>
//             <h1>WEB DEVLOPER AND DEVOPS ENGINEER</h1>
//             <div className="buttons">
//                 <button>See My Work</button>
//                 <button>Contact Me</button>
//             </div>
//             <img src="./scroll.png" alt="" />
//         </div>
//         </div>
//         <div className="slidingTextConatiner">
//         DEVOPS ENGINEER CRCIKET OBSERVER
//         </div>
//         <div className="imgContainer">
//             <img src="./myImg.png" alt="" />
//         </div>
//     </div>
//   )
// }

// export default Hero


import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Sachin Aggarwal</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and DevOps Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
      <img src="./myImg.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;