import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
    const { id } = useParams();
    console.log("id ======= ", id);
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://tanjum-portfolio.vercel.app/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };
        fetchBlog();
    }, [id]);

    if (!blog) return <p>Loading...</p>;

    return (
        <div className="text-orange-400 w-full">
            <div className='relative w-full background-blur'>
                <img src={blog.image} alt={blog.title} className="w-full h-[60vh] rounded-md mb-4 object-cover" />
                <h1 className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-4xl font-bold text-white">{blog.title}</h1>
            </div>
            <div className='my-10 w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                    <div className='flex flex-col'>
                        <p className="text-sm text-white">By {blog.authorName}</p>
                        <p className="text-sm text-white">{blog.authorEmail}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mt-4 text-white" dangerouslySetInnerHTML={{ __html: blog.description }} />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
