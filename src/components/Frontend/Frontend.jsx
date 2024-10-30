import axios from "axios";
import { useEffect, useState } from "react";
import FrontendSkill from "./FrontendSkill";

const Frontend = () => {
    const [frontendSkills, setFrontendSkills] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/skills')
            .then(response => {
                setFrontendSkills(response.data);
                console.log("frontskill",response.data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);
    return (
        <div className="bg-accent card-body text-gray-300">
        <h2 className="card-title mx-auto skills-card">Front-End</h2>
        <div className="skills-section">
            {
                frontendSkills?.map((frontendSkill) => <FrontendSkill key={frontendSkill._id} frontendSkill={frontendSkill}/>)
            }
        </div>
    </div>
    );
};

export default Frontend;