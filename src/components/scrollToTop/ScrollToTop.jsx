import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        setIsVisible(window.scrollY > 300)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button className={`btn scrollToTop flex-center ${isVisible ? 'active' : ''}`}
            onClick={scrollToTop}>
            <FaArrowUp />
        </button>
    )
}

export default ScrollToTop