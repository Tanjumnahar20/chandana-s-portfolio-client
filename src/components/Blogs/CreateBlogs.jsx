import { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    authorName: '',
    authorEmail: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tanjum-portfolio.vercel.app/blogs', formData);
      console.log('Blog created successfully:', response.data);
      alert('Blog created successfully!');
      setFormData({
        title: '',
        image: '',
        authorName: '',
        authorEmail: '',
        description: '',
      });
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog.');
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Author Name</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Author Email</label>
          <input
            type="email"
            name="authorEmail"
            value={formData.authorEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <ReactQuill
            value={formData.description}
            onChange={handleDescriptionChange}
            className="bg-white"
            theme="snow"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
