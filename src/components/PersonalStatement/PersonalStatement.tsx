import { S } from "./PersonalStatement.styles";

export const PersonalStatement = () => {
    return <S.Div>
        <S.P>I SPECIALIZE IN BUILDING </S.P>
        <S.P style={{marginLeft: '10rem'}}><strong>FULL-STACK</strong></S.P>
        <S.P>SOLUTIONS THAT RUN ON <strong style={{marginLeft: '5rem'}}>AWS CLOUD</strong>.</S.P>
    </S.Div>
}