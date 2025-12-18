import { useEffect, useState } from "react";
import Nav from "../nav/Nav"
import "./header.css"
import { TbHexagonLetterHFilled } from "react-icons/tb";
import { FaBarsStaggered } from "react-icons/fa6";
import { RemoveScroll } from 'react-remove-scroll';

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)

  const [isSticky, setIsSticky] = useState(false)
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }

  const handleMenuClick = () => {
    setisMenuOpen(false)
  }

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0)
  }

  useEffect(() => {

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <header className={isSticky ? "header sticky" : "header"}>
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">H E L D E R</a>
          <RemoveScroll enabled={isMenuOpen}> <Nav isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} /> </RemoveScroll>
          <div className="nav-menu-btn" onClick={toggleMenu}>{isMenuOpen ? <TbHexagonLetterHFilled /> : <FaBarsStaggered />}
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header