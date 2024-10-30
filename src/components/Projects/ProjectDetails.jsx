// import { useLoaderData} from "react-router";

import { useLoaderData } from "react-router";

// const ProjectDetails = () => {
//     const { project } = useLoaderData();
//     console.log("single project", project);
//     return (
//         <div className="w-[80%] mx-auto mt-20">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
//           <div className="w-full md:w-1/2">
//             <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
//           </div>
//           <div className="w-full md:w-1/2 p-6">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.name}</h1>
  
//             <div className="mb-6">
//               {/* <p className="text-lg text-gray-600 mb-2"><strong>Frontend Technology: </strong> {project.frontendTechnology}</p>
  
//               <p className="text-lg text-gray-600 mb-2"><strong>Backend Technology: </strong> {project.backendTechnology}</p> */}
  
//               <p className="text-lg text-gray-700"><strong>Description: </strong>{project.description}</p>
//             </div>
            
//             <div className="flex gap-4 my-10 justify-center">
//               <a href={project.clientRepo} target="_blank" rel="noreferrer" className="btn btn-secondary">
//                 Frontend Repo
//               </a>
//               <a href={project.serveRepo} target="_blank" rel="noreferrer" className="btn btn-secondary">
//                 Backend Repo
//               </a>
//               <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
//                 Visit Live Site
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
  
//     );
// };

// export default ProjectDetails;

const ProjectDetails = () => {
    const loaderData = useLoaderData();
    console.log("Loader data:", loaderData); // This should output { project: { ...projectData } }
    
    const { project } = loaderData || {}; // Safely destructure project from loaderData
    console.log("single project", project);
    
    if (!project) {
        return <p>Loading or no data available</p>;
    }
    
    return (
        <div className="w-[80%] mx-auto mt-20">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.name}</h1>
                    <div className="mb-6">
                        <p className="text-lg text-gray-700"><strong>Description: </strong>{project.description}</p>
                    </div>
                    <div className="flex gap-4 my-10 justify-center">
                        <a href={project.clientRepo} target="_blank" rel="noreferrer" className="btn btn-secondary">Frontend Repo</a>
                        <a href={project.serveRepo} target="_blank" rel="noreferrer" className="btn btn-secondary">Backend Repo</a>
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Visit Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
