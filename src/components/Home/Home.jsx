/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import portfolio from '../../assets/images/portfolio.gif';
import CV from '../../file/TANJUM_NAHAR_RESUME.docx (3).pdf'

const Home = () => {
    return (
        // <div
        //     id="home"
        //     className="hero min-h-screen bg-neutral"
        //     style={{
        //         backgroundImage: `url(${portfolio})`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //         backgroundRepeat: "no-repeat",
        //         width: "100vw",
        //         height: "100vh",
        //         margin:"0",
        //         overflow:"hidden"
        //     }}
        // >
        //     <div className="hero-content flex items-center justify-center h-full">
        //         <div className="max-w-lg text-center">
        //             <h1 className="text-5xl font-bold text-white">
        //                 Hello,
        //                 <br/>
        //                 I'm <span className="text-primary font-bold  ">  <TypeAnimation
        //                     cursor={true}
        //                     sequence={[
                               
        //                         "Tanjum Nahar",
        //                         5000,
                                
        //                     ]}
        //                     wrapper="a"
        //                     repeat={3}
        //                 /></span>
        //             </h1>
        //             <p className="py-6 text-2xl text-primary font-semibold">
        //                 <TypeAnimation
        //                     cursor={true}
        //                     sequence={[
                               
        //                         "Full Stack",
        //                         5000,
                                
        //                     ]}
        //                     wrapper="a"
        //                     repeat={3}
        //                 />
        //             </p>
        //             <p className="py-6 text-2xl text-primary font-semibold">
        //                 <TypeAnimation
        //                     cursor={true}
        //                     sequence={[
                               
        //                         "Web Developer",
        //                         4000,
                                
        //                     ]}
        //                     wrapper="a"
        //                     repeat={3}
        //                 />
        //             </p>
        //             <p className="py-6 text-2xl text-primary font-semibold">
        //                 <TypeAnimation
        //                     cursor={true}
        //                     sequence={[
                               
        //                         "Frontend Developer",
        //                         3000,
                                
        //                     ]}
        //                     wrapper="a"
        //                     repeat={3}
        //                 />
        //             </p>
                       
        //             <p className="text-white font-semibold">
        //                 As a full-stack web developer, I am passionate about working for a software company where I can harness my talents in web design, front-end, back-end, database design, and web development to provide excellent customer service.
        //             </p>
        //             <br />
        //             <a href={CV} className=' text-primary border-b-2 border-primary p-2 my-5 font-bold'><button className="rounded-full">RESUME</button></a>
        //         </div>
        //     </div>
        // </div>
        <div id='home' className="hero min-h-screen bg-neutral mb-20" style={{ background: `url(${portfolio})`, backgroundSize: 'cover' }}>
        <div className="hero-content">
            <div className="max-w-lg">
                <h1 className="text-5xl font-bold text-gray-200">

                    Hello,
                    <br />
                    I'm <span className='text-primary font-bold'><TypeAnimation
                        cursor={true}
                        sequence={[
                            "Tanjum Nahar",
                            5000,
                        ]}
                        wrapper="a"
                        repeat={1}
                    /></span>

                </h1>
                <p className="pt-5 text-2xl text-primary font-semibold">
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            "Full-Stack Developer",
                            5000,
                        ]}
                        wrapper="a"
                        repeat={3}
                    />
                </p>
                <p className="pt-2 text-2xl text-primary font-semibold">
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            "Web Developer",
                            4000,
                        ]}
                        wrapper="a"
                        repeat={3}
                    />
                </p>
                <p className="mb-5 pt-2 text-2xl text-primary font-semibold">
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            "Frontend Developer",
                            3000,
                        ]}
                        wrapper="a"
                        repeat={3}
                    />
                </p>
                <p className='text-white font-semibold'>As a full-stack web developer, I am passionate about working for a software company where I can hardness my talents in web design, front-end, back-end, UI and UX design web development to provide excellent customer service.</p>
                <br />
                <a href={CV} className='text-primary border-b-2 border-primary p-2 my-5 font-bold'><button className="rounded-full">RESUME</button></a>
            </div>
        </div>
    </div>
    );
};

export default Home;