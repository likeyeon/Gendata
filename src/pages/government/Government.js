import GovernmentTitle from "./components/GovernmentTitle";
import GovernmentSupport from "./components/governmentSupport/GovernmentSupport";
import GovernmentContact from "./components/governmentContact/GovernmentContact";
import { Helmet } from "react-helmet";

const Government = () => {
  return (
    <>
      <Helmet>
        <title>정부지원사업</title>
      </Helmet>
      <GovernmentTitle />
      <GovernmentSupport />
      <GovernmentContact />
    </>
  );
};

export default Government;
