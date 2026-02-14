import { skills } from "../../data/skills"

const Skills = () => {
  return (
    <div className="education">
      <h4 className="label">Skills</h4>
      <ul className="bars">
        {skills.map((item) => (
          <li className="bar" key={item.title}>
            <div className="info">
              <span>{item.title}:<br />{item.stack}</span>
              <span>{item.level}%</span>
            </div>
            <div className="line">
              <div
                className="progress"
                style={{ width: `${item.level}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills