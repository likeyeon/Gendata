import ContactButton from "../../../components/contact-button/ContactButton";

const Contact = () => {
  return (
    <>
      <ContactButton
        className=""
        maxTitle="우리 회사에 딱 맞는 AI 서비스를 찾아보세요!"
        minTitle={
          <>
            우리 회사에 딱 맞는 <br />
            AI 서비스를 찾아보세요!
          </>
        }
      />
    </>
  );
};
export default Contact;
