
import { motion } from "motion/react"
import { titleVariants, subTitleVariants } from "../../utils/animation"
import "./sectionTitle.css"

const SectionTitle = ({ title, subtitle }) => {

    return (
        <>
            <motion.h2 className="inner-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={titleVariants}
            >{title}</motion.h2>
            <h3 className="inner-second-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={subTitleVariants}
            >{subtitle}</h3>
        </>
    )
}

export default SectionTitle