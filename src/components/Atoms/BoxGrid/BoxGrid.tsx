import { BoxItem } from "../BoxItem/BoxItem";
import { S } from "./BoxGrid.styles";
import { BoxGridProps } from "./BoxGrid.types";

export const BoxGrid = (props: BoxGridProps) => {
  const { contentList } = props;
  return (
    <S.Grid>
      <BoxItem content={contentList[0]} />
      <BoxItem content={contentList[1]} />
      <BoxItem content={contentList[2]} />
      <BoxItem content={contentList[3]} />
    </S.Grid>
  );
};
