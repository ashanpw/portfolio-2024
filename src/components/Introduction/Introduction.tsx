import { S } from "./Introduction.styles";

export const Introduction = () => {
  return (
    <S.Div>
      <S.P>HELLO MY NAME IS</S.P>
      <S.P style={{ marginLeft: "10rem" }}>
        <strong>ASHAN</strong>
      </S.P>
      <S.P>
        AND I AM A SOFTWARE <strong>ENGINEER</strong>.
      </S.P>
    </S.Div>
  );
};
