import DataDealingTitle from "./components/DataDealingTitle";
import DataDealingBanner from "./components/DataDealingBanner";
import DataDealingTypes from "./components/DataDealingTypes";
import DataDealingContact from "./components/dataDealingContact/DataDealingContact";
import { Helmet } from "react-helmet";

const DataDealing = () => {
  return (
    <>
      <Helmet>
        <title>데이터 거래</title>
      </Helmet>
      <DataDealingTitle />
      <DataDealingBanner />
      <DataDealingTypes />
      <DataDealingContact />
    </>
  );
};

export default DataDealing;
