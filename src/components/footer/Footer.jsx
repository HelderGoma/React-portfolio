import { infolinks, followLinks } from "../../data/FooterData"
import "./footer.css"
import FooterLinkGroup from "./FooterLinkGroup"


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>Ilay</h2>
          <p>Frontend Developer</p>
          <a href="#about">About me</a>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title="More" links={infolinks} isSocial={false}/>
        <div className="hr"></div>
        <FooterLinkGroup title="Follow" links={followLinks} isSocial={true}/>
      </div>
      <p className="footer-copyright" >© <span className="year">{year}</span> by Coding Snow. All rights reserved.</p>
    </footer>
  )
}

export default Footer