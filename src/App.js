import Gnb from "./components/gnb/Gnb";
import Footer from "./components/footer/Footer";
const App = ({ component }) => {
  return (
    <>
      <Gnb />
      <div className="content">{component}</div>
      <Footer />
    </>
  );
};

export default App;
