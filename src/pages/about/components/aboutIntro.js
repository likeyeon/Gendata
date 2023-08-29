import styles from "../components/scss/AboutIntro.module.scss";
import Inside from "../../../components/inside/Inside";
import { Subtitle } from "../../../components/common/typo/Typo";

const AboutIntro = () => {
  return (
    <main>
      <Inside>
        <div className={styles.contents_wrap}>
          <div className={styles.title_table}>
            <div className={styles.title_wrap}>
              <p>
                <strong>회사소개</strong>
              </p>
            </div>
            <div className={styles.subtitle_wrap}>
              <p>
                <Subtitle
                  subtitle="누구에게나 열려있는 AI"
                  className="subtitle"
                />
              </p>
              <p>
                <Subtitle subtitle="젠데이터" className="subtitle" />
              </p>
            </div>
          </div>
          <div className={styles.text_table}>
            <p>
              젠데이터는 인공지능 데이터구축과 모델개발, 품질검증, 그리고
              인공지능 교육사업과 AI비즈니스 매칭 서비스를 제공하는 기업입니다.
              우리는 혁신적인 인공지능 솔루션으로 기업들의 성장과 발전을 돕고자
              최선을 다하고 있습니다.
            </p>
            <br />
            <p>
              데이터는 인공지능의 핵심 요소입니다. 젠데이터는 풍부한 데이터
              리소스와 우수한 데이터 구축 능력을 바탕으로 다양한 분야에서
              정확하고 효과적인 인공지능 모델을 개발합니다. 우리의 전문가 팀은
              데이터 수집,전처리,레이블링(자율주행 3D Cloud Point 포함)등의
              작업을 철저하게 수행하여 고품질의 데이터셋을 구축합니다.
            </p>
            <br />
            <p>
              젠데이터는 또한 인공지능 교육사업을 통해 인공지능에 대한 지식을
              확산시키고, 기업들이 필요로 하는 데이터라벨러 인재양성과 PM
              인력양성, AI개발 인력을 양성합니다. 우리의 교육 프로그램은
              체계적인 커리큘럼과 실전 경험을 통해 교육생들에게 전문 인공지능
              실무 노하우를 전달합니다.
            </p>
            <br />
            <p>
              {" "}
              또한, 젠데이터는 AI비즈니스 매칭 서비스를 운영하여 비전문고객에게
              성공적인 인공지능 도입 솔루션 제공과 전문 AI기업의 매칭을 통하여
              인공지능 생태계 구축을 목표로 하고 있습니다.
              <br />
              단순히 매칭으로만 끝나는 것이 아닌 젠데이터 어려운 소통문제와
              프로젝트 일정관리 등을 통해 전문인력의 부족 문제를 해결할 수
              있습니다.
            </p>
            <br />
            <p>
              {" "}
              젠데이터는 기업의 성공을 위해 최선을 다할 것입니다. 언제든지
              저희와 함께 협력할 수 있는 기회가 필요하시다면 연락 주시기
              바랍니다.
              <br />
              <br />
              여러분의 비즈니스에 가치를 더할 수 있도록 최선을 다하겠습니다.
            </p>
            <br />
            <p>
              <strong>대표이사 함민혁</strong>
            </p>
          </div>
        </div>
      </Inside>
    </main>
  );
  // <div className= { styles.container }>
  //   <div className= { styles.items }>
  //     <div className= {styles.left}>
  //       <p className={styles.a}>회사소개</p><br />
  //       <p className={styles.b}>누구에게나 열려있는 AI</p><br/>
  //       <p className={styles.c}>젠데이터</p>
  //     </div>
  //     <div className={styles.right}>
  //       <p className={styles.one}>
  //       젠데이터는 인공지능 데이터구축과 모델개발, 품질검증, 그리고 인공지능 교육사업과 AI비즈니스 매칭 서비스를 제공하는 기업입니다. 우리는 혁신적인 인공지능 솔루션으로 기업들의 성장과 발전을 돕고자 최선을 다하고 있습니다.
  //       </p>
  //       <p className={styles.space}></p>
  //       <p className={styles.two}>
  //       데이터는 인공지능의 핵심 요소입니다. 젠데이터는 풍부한 데이터 리소스와 우수한 데이터 구축 능력을 바탕으로 다양한 분야에서 정확하고 효과적인 인공지능 모델을 개발합니다. 우리의 전문가 팀은 데이터 수집,전처리,레이블링(자율주행 3D Cloud Point 포함)등의 작업을 철저하게 수행하여 고품질의 데이터셋을 구축합니다.
  //       </p>
  //       <p className={styles.space}></p>
  //       <p className={styles.three}>
  //         젠데이터는 또한 인공지능 교육사업을 통해 인공지능에 대한 지식을 확산시키고, 기업들이 필요로 하는 데이터라벨러 인재양성과 PM 인력양성, AI개발 인력을 양성합니다. 우리의 교육 프로그램은 체계적인 커리큘럼과 실전 경험을 통해 교육생들에게 전문 인공지능 실무 노하우를 전달합니다.
  //       </p>
  //       <p className={styles.space}></p>
  //       <p className={styles.four}>
  //         또한, 젠데이터는 AI비즈니스 매칭 서비스를 운영하여 비전문고객에게 성공적인 인공지능 도입 솔루션 제공과 전문 AI기업의 매칭을 통하여 인공지능 생태계 구축을 목표로 하고 있습니다.
  //         <br />
  //         단순히 매칭으로만 끝나는 것이 아닌 젠데이터 어려운 소통문제와 프로젝트 일정관리 등을 통해 전문인력의 부족 문제를 해결할 수 있습니다.
  //       </p>
  //       <p className={styles.space}></p>
  //       <p className={styles.five}>
  //         젠데이터는 기업의 성공을 위해 최선을 다할 것입니다. 언제든지 저희와 함께 협력할 수 있는 기회가 필요하시다면 연락 주시기 바랍니다.
  //         <br/>
  //         <br/>
  //         여러분의 비즈니스에 가치를 더할 수 있도록 최선을 다하겠습니다.
  //       </p>
  //       <p className={styles.last}>
  //         <br/>
  //         <strong>대표이사 함민혁</strong>
  //       </p>
  //     </div>
  //   </div>
  // </div>
};

export default AboutIntro;
