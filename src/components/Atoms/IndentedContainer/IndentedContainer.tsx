import { S } from './IndentedContainer.styles';
import { IndentedContainerProps } from './IndentedContainer.types';

export const IndentedContainer = (props: IndentedContainerProps) => {
  if (!props.index || !props.title) {
    return <S.Container>{props.children}</S.Container>;
  }
  return (
    <div id={props.id}>
      <S.Title>
        <S.P>{`/0${props.index}`}</S.P>
        <S.H3>{props.title}</S.H3>
      </S.Title>
      <S.Container>{props.children}</S.Container>
    </div>
  );
};
