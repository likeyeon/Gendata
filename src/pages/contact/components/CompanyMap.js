import { NavermapsProvider } from "react-naver-maps";
import NaverMapApi from "./NaverMapApi";

const CompanyMap = () => {
  const naverMapKey = process.env.REACT_APP_NAVERMAPS_CLIENT_ID;

  return (
    <NavermapsProvider ncpClientId={naverMapKey}>
      <NaverMapApi />
    </NavermapsProvider>
  );
};

export default CompanyMap;
