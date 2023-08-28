import Title from "../../../components/title/Title";

const DataCollectionTitle = () => {
  return (
    <>
      <Title title = "데이터 수집"  
             titleClassName = ""
             maxContents = {
              <>
                인공지능 모델 학습에 필요한 원천데이터를 <strong>수집</strong>하는 서비스입니다.
              </>}
             minContents = {
              <>
                인공지능 모델 학습에 필요한 원천데이터를 <strong>수집</strong>하는 서비스입니다.
              </>}
             contentClassName = ""
        />
    </>
  )
}
export default DataCollectionTitle;