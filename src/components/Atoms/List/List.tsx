import {
  LineAnimationVariants,
  ListAnimationVariants,
} from "../../../utils/Constants";
import { S } from "./List.styles";
import { ListProps } from "./List.types";

export const List = (props: ListProps) => {
  return (
    <>
      {props.contentItems.map((p, idx) => (
        <>
          {idx === 0 && (
            <S.Line
              initial="initial"
              whileInView="animate"
              variants={LineAnimationVariants}
            />
          )}
          <S.Grid
            initial="initial"
            whileInView="animate"
            variants={ListAnimationVariants}
          >
            <S.Label>{p.label}</S.Label>
            <S.Value>{p.value}</S.Value>
          </S.Grid>
          <S.Line
            initial="initial"
            whileInView="animate"
            variants={LineAnimationVariants}
          />
        </>
      ))}
    </>
  );
};
