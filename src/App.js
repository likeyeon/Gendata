import Gnb from "./components/gnb/Gnb";

const App = ({ component }) => {
  return (
    <>
      <Gnb />
      <div className="content">{component}</div>
    </>
  );
};

export default App;
