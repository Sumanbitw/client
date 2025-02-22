import Footer from "@/components/home/Footer";
import MainLayout from "@/components/home/MainLayout";
import Navbar from "@/components/home/Navbar";
import { matchRoutes, useLocation } from "react-router-dom";
import HotelBooking from "./HotelBooking";
import Contacts from "./Contacts";

const Home = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const routes = [{ path: "hotel/:id" }]; // Define your route pattern

  const hotelmatch = matchRoutes(routes, location.pathname);
  return (
    <>
      <Navbar />
      <hr />
      {(pathname === "/" || pathname === "/home" || pathname === "/hotel") && (
        <MainLayout />
      )}
      {hotelmatch && <HotelBooking />}
      {pathname === "/contacts" && <Contacts />}
      <Footer />
    </>
  );
};

export default Home;
