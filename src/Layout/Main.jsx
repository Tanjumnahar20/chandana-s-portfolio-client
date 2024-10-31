import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div className="bg-black">
            <NavBar></NavBar>
            <Outlet></Outlet>
           <Footer></Footer>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;