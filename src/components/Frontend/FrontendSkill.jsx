/* eslint-disable react/prop-types */
import  './Front.css'

const FrontendSkill = ({frontendSkill}) => {
    const {name,img} = frontendSkill;
    return (
        <div className="skill-card">
          <img src={img} alt={name} className="skill-icon" />
          <span className="skill-name">{name}</span>
        </div>
      );
};

export default FrontendSkill;
