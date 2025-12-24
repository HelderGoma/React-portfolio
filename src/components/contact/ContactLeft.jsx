import { contactData } from "../../data/contactData"
import { motion } from "motion/react"
import { slideInVariants } from "../../utils/animation"




const ContactLeft = () => {
    return (
        <div className="contact-left">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("top", 0.6, 50, false)}> Open to new opportunities.</motion.h2>
            <ul className="contact-list">
                {contactData.map((item, index) => (
                    <motion.li
                        key={item.id}
                        initial="hidden"
                        whileInView="visible"
                        custom={index}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={slideInVariants("top", 0.7, 50, true)}>
                        <h3>
                            <item.icon /> {item.title}
                        </h3>
                        <span>
                            <a href={item.link}>{item.value}</a>
                        </span>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

export default ContactLeft