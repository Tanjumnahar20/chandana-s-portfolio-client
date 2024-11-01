/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Project from "./Project";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch('https://tanjum-portfolio.vercel.app/projects')
        .then(res=>res.json())
        .then(data=>{
            setProjects(data)
        })
    },[])

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div id="project" className="w-[87%]  mx-auto">
            <h1 className='title text-4xl text-center text-gray-300 my-10'>
                Project Showcase
            </h1>
            <div className='w-11/12 mx-auto'>
                <Slider {...settings} >
                    {projects?.map((project) => (
                        <div key={project._id} className="px-4 h-full">
                            <Project project={project} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;