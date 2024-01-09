import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";
  return (
    <div className="root">
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      {isHomeRoute && <Footer />}
    </div>
  );
};

export default MainLayout;
