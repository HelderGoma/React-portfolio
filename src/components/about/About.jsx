
import { motion } from "motion/react";
import { aboutImg } from "../../assets/images"
import SectionTitle from "../sectionTitle/SectionTitle"
import "./About.css"
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
            variants={slideInVariants("left", 0.7, 100, false)}
          >
            <img src={aboutImg} alt="about" /></motion.div>
          <div className="about-info">
            <div className="description">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.7, 100, true)}>I'm Helder</motion.h3>
              <motion.h4
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.7, 100, true)}><span>HR Manager | IT Recruiter</span> based in <span>Europe</span></motion.h4>
              <motion.p
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.7, 100, true)}>
                HR specialist with a degree in HR Management (Belarusian State University) and hands-on full-cycle hiring experience: built teams from scratch and closed 20+ positions across a retail business and hospitality operations, managing teams of 10+ people.
                Technical background in frontend development (React, TypeScript, Tel-Ran.de program) — able to read technical job requirements and run first-stage tech screening for junior/middle candidates without pulling in a technical specialist.
                Full-cycle recruiting experience: job profiling, sourcing, interviewing, onboarding, and reducing staff turnover — as a business owner and operations manager.
                Check out my CV
              </motion.p>
            </div>
            <ul className="professional-list">
              {profList.map((item, index) => (
                <motion.li className="list-item" key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: false, amount: 0.5 }}
                  variants={slideInVariants("right", 0.7, 40, true)}
                >
                  <span className="number">{item.number}</span>
                  <span className="text">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a href={`${import.meta.env.BASE_URL}CV_HelderGoma_ru_eng.pdf`} rel="noopener noreferrer" target="_blank" className="inner-info-link"
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInVariants("right", 0.7, 40, true)}
            >Download CV
              <FaDownload />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About