import { S } from "./Contact.styles";
import { IndentedContainer } from "../../Atoms/IndentedContainer/IndentedContainer";
import { List } from "../../Atoms/List/List";
export const Contact = () => {
  const circleAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
      rotate: -180,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        ease: "easeOut",
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  const text = {
    title: "CONTACT",
    index: 3,
    contentItems: [
      { label: "LOCATION", value: "UNITED STATES" },
      { label: "EMAIL", value: "ASHAN399@GMAIL.COM" },
      {
        label: "SOCIAL",
        value: "LINKEDIN",
        url: "https://www.linkedin.com/in/ashanpandu/",
      },
      {
        label: "CODE",
        value: "GITHUB",
        url: "https://github.com/ashanpw/",
      },
    ],
  };
  return (
    <>
      <S.Container>
        <S.Title>CONTACT</S.Title>
        <IndentedContainer>
          <S.FlexBox>
            <S.Image
              src="https://ashanpw-asset-bucket.s3.amazonaws.com/contact/abstractArtBackground.png"
              alt=""
            />
            <S.P>CANNY EDGE DETECTION PYTHON SCRIPT</S.P>
          </S.FlexBox>

          <List contentItems={text.contentItems} useDarkMode />
          <S.Circle
            variants={circleAnimationVariants}
            initial="initial"
            whileInView="animate"
          >
            THANKS FOR VISITING
          </S.Circle>
        </IndentedContainer>
      </S.Container>
    </>
  );
};
