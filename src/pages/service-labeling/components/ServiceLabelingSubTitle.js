import Title from "../../../components/title/Title";

const ServiceLabelingSubTitle = () => {
  return(
    <>
      <Title 
        title = "AI 데이터 가공"  
        titleClassName = ""
        maxContents = {
         <>
           AI모델에 필요한 학습용 데이터셋을 다양한 어노테이션을 통해 라벨링 하는 서비스
         </>}
        minContents = {
         <>
           데이터를 AI가 학습하고 테스트하는 라벨링 서비스
         </>}
        contentClassName = ""
      />
    </>
  )
}

export default ServiceLabelingSubTitle;