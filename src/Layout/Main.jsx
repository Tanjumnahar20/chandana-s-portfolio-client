import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";

const Main = () => {
    return (
        <div className="bg-black">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Projects></Projects>
           <Footer></Footer>
        </div>
    );
};

export default Main;