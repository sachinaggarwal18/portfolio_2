import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items=[
    {
        id:1,
        title:"Malnutrtion Watch",
        img:"./malnutrition.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, veritatis totam aliquam distinctio, assumenda ad nemo labore exercitationem vel illo doloremque quos magnam voluptates ipsum autem iusto magni, laboriosam recusandae quae nihil suscipit maxime itaque eligendi tempora. ",
        link: "https://example.com/fusion-chat"
    },
    
    {
        id:2,
        title:"Ochi",
        img:"./ochi.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, veritatis totam aliquam distinctio, assumenda ad nemo labore exercitationem vel illo doloremque quos magnam voluptates ipsum autem iusto magni, laboriosam recusandae quae nihil suscipit maxime itaque eligendi tempora. " ,
        link: "https://animation-wine.vercel.app/"
    },
    
    {
        id:3,
        title:"Fusion Chat",
        img:"./fusionchat.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, veritatis totam aliquam distinctio, assumenda ad nemo labore exercitationem vel illo doloremque quos magnam voluptates ipsum autem iusto magni, laboriosam recusandae quae nihil suscipit maxime itaque eligendi tempora. " ,
        link: "https://fusionchat-nine.vercel.app/"
    },

];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;