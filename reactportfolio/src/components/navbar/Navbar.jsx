import Sidebar from '../sidebar/Sidebar';
import './navbar.scss'
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            >SACHIN AGGARWAL</motion.span>
            <div className="social">
                <a href="https://www.instagram.com/sach_18_in/" target='blank'><img src="/instagram.png" alt=""  /></a>

                <a href="https://github.com/sachinaggarwal18" target='blank'><img src="/github.jpg" alt=""  /></a>

                <a href="https://www.linkedin.com/in/sachin-aggarwal-32b162227/" target='blank'><img src="/linkedin2.webp" alt=""  /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
