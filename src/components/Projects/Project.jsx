/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const Project = ({ project }) => { 
    const {img,description, badge, liveUrl,name,_id    } = project;
    const navigate = useNavigate();
    const truncateDescription = (text, charLimit) => {
      if (!text) return '';
      return text.length > charLimit ? text.slice(0, charLimit) + '...' : text;
    };
  const handleDetails =()=>{
   navigate(`/projects/${project._id}`)
  }
    return (
      <div
        className="bg-accent text-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 relative h-[550px]"
      >
        <a href='' target="_blank" rel="noreferrer">
          <figure className="relative">
            <img src={img} alt="Project" className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
            <figcaption className="absolute bottom-4 left-4 text-xl font-semibold text-white">
              <span className="title-shadow">{name}</span>
            </figcaption>
          </figure>
        </a>
  
        <div className="p-4">
          <div className="text-sm text-white mb-4">
            <span className="font-bold">Frontend Technology:</span> <span className='text-green-500 font-semibold'>{project?.frontendTechnology}</span>
          </div>
          <div className="text-sm mb-4">
            <span className="font-bold">Backend Technology:</span> <span  className='text-green-500 font-semibold'>{project?.backendTechnology}</span>
          </div>
          <p className="text-sm mb-16">
          <span className="font-bold">Description:</span> {truncateDescription(description, 120)}
          </p>
          <div className="absolute left-0 right-0 flex space-x-2 justify-between bottom-4 mt-10 px-4">
            <a
              href={liveUrl }
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Live Site
            </a>
            {/* <Link to={`/projects/${project._id}`} className="btn btn-sm btn-secondary">
              Details
            </Link> */}
            <button onClick={handleDetails} className="btn btn-sm btn-secondary">
              Details
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default Project;
