
import ContactForm from "./ContactForm"
import { motion } from "motion/react"
import { slideInVariants } from "../../utils/animation"

const ContactRight = () => {
    return (
        <div className="contact-right">
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("top", 0.9, 60, false)}
            >Let’s get in touch.  <span>I’ll be happy to hear from you.</span></motion.p>
            <ContactForm />
        </div>
    )
}

export default ContactRight