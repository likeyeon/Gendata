import { Outlet } from "react-router-dom";
import Gnb from "./components/gnb/Gnb";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Gnb />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
