// import { useState } from 'react';
// import axios from 'axios';

// const CreateProject = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     badge: '',
//     technology: '',
//     clientRepo: '',
//     serverRepo: '',
//     liveUrl: '',
//     image: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://tanjum-portfolio.vercel.app/projects', formData);
//       console.log('Project created successfully:', response.data);
//       setFormData({
//         name: '',
//         badge: '',
//         technology: '',
//         clientRepo: '',
//         serverRepo: '',
//         liveUrl: '',
//         image: '',
//         description: ''
//       });
//     } catch (error) {
//       console.error('Error creating project:', error);
//     }
//   };

//   return (
//     <div className="max-w-lg my-10 mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Create Project</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Project Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Badge</label>
//           <input
//             type="text"
//             name="badge"
//             value={formData.badge}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Technology</label>
//           <input
//             type="text"
//             name="technology"
//             value={formData.technology}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Client Repo URL</label>
//           <input
//             type="url"
//             name="clientRepo"
//             value={formData.clientRepo}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Server Repo URL</label>
//           <input
//             type="url"
//             name="serverRepo"
//             value={formData.serverRepo}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Live URL</label>
//           <input
//             type="url"
//             name="liveUrl"
//             value={formData.liveUrl}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Image URL</label>
//           <input
//             type="url"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             rows="4"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateProject;



import { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    badge: '',
    technology: [],
    clientRepo: '',
    serverRepo: '',
    liveUrl: '',
    image: '',
    description: ''
  });

  const [techInput, setTechInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTechnology = () => {
    if (techInput.trim()) {
      setFormData({
        ...formData,
        technology: [...formData.technology, { name: techInput }]
      });
      setTechInput(''); // Clear the input field
    }
  };

  const handleRemoveTechnology = (index) => {
    setFormData({
      ...formData,
      technology: formData.technology.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tanjum-portfolio.vercel.app/projects', formData);
      console.log('Project created successfully:', response.data);
      // Reset form fields
      setFormData({
        name: '',
        badge: '',
        technology: [],
        clientRepo: '',
        serverRepo: '',
        liveUrl: '',
        image: '',
        description: ''
      });
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Project</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-gray-700">Project Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Badge</label>
          <input
            type="text"
            name="badge"
            value={formData.badge}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Technology</label>
          <div className="flex">
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              className="w-full px-3 py-2 border rounded mr-2"
              placeholder="Add a technology"
            />
            <button
              type="button"
              onClick={handleAddTechnology}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add
            </button>
          </div>
          <div className="mt-2">
            {formData.technology.map((tech, index) => (
              <div key={index} className="flex items-center mt-1">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-gray-700">
                  {tech.name}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveTechnology(index)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Client Repo URL</label>
          <input
            type="url"
            name="clientRepo"
            value={formData.clientRepo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Server Repo URL</label>
          <input
            type="url"
            name="serverRepo"
            value={formData.serverRepo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Live URL</label>
          <input
            type="url"
            name="liveUrl"
            value={formData.liveUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
