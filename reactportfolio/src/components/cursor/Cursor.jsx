// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import "./cursor.scss";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   return (
//     <motion.div
//       className="cursor"
//       animate={{ x: position.x+10, y: position.y+10 }}
//     ></motion.div>
//   );
// };

// export default Cursor;

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const mouseMove = (e) => {
      x.set(e.clientX + 10);
      y.set(e.clientY + 10);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      className="cursor"
      style={{ x, y }}
    ></motion.div>
  );
};

export default Cursor;
