import Title from '../../../components/title/Title';

const ServiceLabelingMainTitle = () => {
  return (
    <>
      <Title title = "데이터 가공"  
             titleClassName = ""
             maxContents = {
              <>
                원천데이터를 인공지능 모델이 학습할 수 있는 데이터셋으로 가공(<strong>라벨링</strong>) 합니다.
              </>}
             minContents = {
              <>
                원천데이터를 인공지능 모델이 학습할 수 있는 데이터셋으로 가공(<strong>라벨링</strong>) 합니다
              </>}
             contentClassName = ""
      />
    </>
  )
}
export default ServiceLabelingMainTitle; 
