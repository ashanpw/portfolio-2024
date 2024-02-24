import { S } from "./IndentedContainer.styles";
import { IndentedContainerProps } from "./IndentedContainer.types";

export const IndentedContainer = (props: IndentedContainerProps) => {
  if (!props.index || !props.title) {
    return <S.Container>{props.children}</S.Container>;
  }
  return (
    <div>
      <S.Title>
        <S.P>{`/0${props.index}`}</S.P>
        <h3>{props.title}</h3>
      </S.Title>
      <S.Container>{props.children}</S.Container>
    </div>
  );
};
