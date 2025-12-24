import { motion } from "motion/react"
import SectionTitle from "../sectionTitle/SectionTitle"
import Education from "./Education"
import Skills from "./Skills"
import "./Skills.css"
import WorkExperience from "./WorkExperience"
import { slideInVariants } from "../../utils/animation"



const SkillsInfo = () => {
  return (
    <section className="skills section" id="skills" >
      <div className="container flex-center">
        <SectionTitle title="Skills" subtitle="Skills" />

        <div className="inner-content">
          <motion.div className="skills-description"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("top", 0.6, 60, true)}
          >
            <h3>Education & Skills</h3>
            <p>
              For more than 2 years, I have been learning and practicing frontend development, working with modern web technologies and continuously improving my skills.
            </p>
          </motion.div>
          <div className="skills-info education-all">
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInVariants("top", 0.7, 50, true)}
            >
              < Education />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInVariants("top", 0.7, 50, true)}
            >
              <Skills />
            </motion.div>


          </div>
          <WorkExperience />
        </div>
      </div>
    </section >
  )
}

export default SkillsInfo