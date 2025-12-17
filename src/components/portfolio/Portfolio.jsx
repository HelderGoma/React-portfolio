import "./Portfolio.css"
import { portfolioData } from "../../data/portfolioData"
import PortfolioItem from "./PortfolioItem"
import SectionTitle from "../sectionTitle/sectionTitle"
const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio" >
      <div className="container flex-center">
        <SectionTitle title="Portfolio" subtitle="Portfolio" />
        <div className="portfolio-wrapper">
          {
            portfolioData.map((item => {
              return (
                <PortfolioItem key={item.id} item={item} />
              )
            }
            ))
          }
        </div>
      </div>
    </section >
  )
}

export default Portfolio