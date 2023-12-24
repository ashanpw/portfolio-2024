import { StyledDiv, StyledDot } from "./NavigationDots.styles";

export const Dots = (props: any) => {
  const dotList = [];

  for (let i = 0; i < props.size; i++) {
    dotList.push(
      <StyledDot
        isSelected={i === props.selectedIdx}
        onClick={() => props.onClickFn(i)}
      />
    );
  }
  return <StyledDiv>{dotList}</StyledDiv>;
};
