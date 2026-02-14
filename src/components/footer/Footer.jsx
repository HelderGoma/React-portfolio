import { followLinks } from "../../data/FooterData"
import "./Footer.css"
import FooterLinkGroup from "./FooterLinkGroup"
import { FaPhone, FaEnvelope } from "react-icons/fa"


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" id="contact">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>Helder</h2>
          <p>Frontend Developer</p>
          <h3 className="contact-title">Contact me</h3>
          <a className="email" href="mailto:elder.goma@mail.com"><i><FaEnvelope /></i>elder.goma@mail.com</a>
          <a className="phone" href="tel:+375339107751"> <i> <FaPhone /></i> +375339107751</a>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title="Follow" links={followLinks} isSocial={true} />
      </div>
      <p className="footer-copyright" >© <span className="year">{year}</span> by Helder. All rights reserved.</p>
    </footer>
  )
}

export default Footer