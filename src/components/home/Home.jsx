import "./home.css"
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { mainImg } from "../../assets/images";
import { motion } from "motion/react";
import { iconVariants, slideInVariants } from "../../utils/animation";


const icons = [
  { id: 1, href: "https://www.facebook.com/helder.goma", icon: <FaFacebookF /> },
  { id: 2, href: "https://www.instagram.com/h.g.o.m.a/", icon: <FaInstagram /> },
  { id: 3, href: "https://github.com/HelderGoma", icon: <FaGithub /> },
  { id: 4, href: "https://www.linkedin.com/feed/", icon: <FaLinkedin /> },
  { id: 5, href: "https://t.me/HelderGoma", icon: <FaTelegram /> }
]


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="media-icon"
              target="_blank"

            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.5, 50, true)}>Hi, I am Helder</motion.h1>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.7, 50, true)} >Front-end Developer</motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.9, 65, true)}>
            I create stunning websites for your business, Highly experienced in web design and development
          </motion.p>
          <motion.a
            href="#contact"
            className="home-info-link inner-info-link"
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.9, 100, true)}
          >
            Contact me
            <FaCircleArrowRight />
          </motion.a>
        </div>
        <motion.div className="home-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideInVariants("right", 0.9, 150, false)}
        >
          <img src={mainImg} alt="man" />
        </motion.div>
      </div>
    </section>
  )
}

export default Home