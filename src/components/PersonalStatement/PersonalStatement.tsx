import { S } from "./PersonalStatement.styles";

export const PersonalStatement = () => {
  const headerVariants = {
    initial: {
      opacity: 0,
      scale: 0.75,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        delay: 0.1,
        duration: 0.5,
      },
    },
  };
  return (
    <S.Div>
      <S.P variants={headerVariants} initial="initial" whileInView="animate">
        I SPECIALIZE IN BUILDING{" "}
      </S.P>
      <S.P
        style={{ marginLeft: "10rem" }}
        variants={headerVariants}
        initial="initial"
        whileInView="animate"
      >
        <strong>FULL-STACK</strong>
      </S.P>
      <S.P variants={headerVariants} initial="initial" whileInView="animate">
        SOLUTIONS THAT RUN ON <strong>AWS CLOUD</strong>.
      </S.P>
    </S.Div>
  );
};
