
import { motion } from "motion/react";
import { aboutImg } from "../../assets/images"
import SectionTitle from "../sectionTitle/sectionTitle";
import "./about.css"
import { FaDownload } from "react-icons/fa";
import { slideInVariants } from "../../utils/animation";
import { profList } from "../../data/profList";


const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me" />
        {/* <h2 className="inner-title">About me</h2>
        <h3 className="inner-second-title">About me</h3> */}
        <div className="about-wrapper">
          <motion.div className="about-img"
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.9, 100, false)}
          >
            <img src={aboutImg} alt="about" /></motion.div>
          <div className="about-info">
            <div className="description">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.9, 100, true)}>I'm Helder</motion.h3>
              <motion.h4
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.9, 100, true)}>A Lead <span>Front-End Developer</span> based in <span>California</span></motion.h4>
              <motion.p
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.9, 100, true)}>
                I design and develop services for customers specializing creating stylish, modern
                websites,
                web services and online stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </motion.p>
            </div>
            <ul className="professional-list">
              {profList.map((item, index) => (
                <motion.li className="list-item" key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: false, amount: 0.5 }}
                  variants={slideInVariants("right", 0.9, 40, true)}
                >
                  <span className="number">{item.number}</span>
                  <span className="text">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a href="" className="inner-info-link"
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInVariants("right", 0.9, 40, true)}
            >Download Resume
              <FaDownload />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About