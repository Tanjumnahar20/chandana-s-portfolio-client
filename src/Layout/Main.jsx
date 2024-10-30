import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
    return (
        <div className="bg-black">
            <NavBar></NavBar>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;