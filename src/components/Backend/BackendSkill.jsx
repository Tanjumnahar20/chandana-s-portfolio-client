/* eslint-disable react/prop-types */
import './BackendSkill.css'
const BackendSkill = ({backendSkill}) => {
    const {name, img}  = backendSkill;
    return (
        <div className="skill-card">
        <img src={img} alt={name} className="skill-icon" />
        <span className="skill-name">{name}</span>
      </div>
    );
};

export default BackendSkill;