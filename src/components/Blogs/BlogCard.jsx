/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { _id, title, image, authorName, description } = blog;
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/blogs/${_id}`);
    };

    return (
        <div className="relative max-w-sm bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2 text-lg font-semibold">
                    {title}
                </div>
            </div>
            <div className="p-4">
                <p className="text-indigo-500 font-medium">{authorName}</p>
                <div><span className="mt-4" dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }} />...</div>
            </div>
            <button
                onClick={handleReadMore}
                className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
            >
                <span className="px-6 py-2 rounded-md backdrop-blur-md bg-white bg-opacity-20">Read More</span>
            </button>
        </div>
    );
};

export default BlogCard;
