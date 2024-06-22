import { BoxItem } from "../../Atoms/BoxItem/BoxItem";
import { S } from "./AboutBoxes.styles";

export const AboutBoxes = () => {
  const text = {
    title: "TECHNOLOGY",
    contentItems: [
      {
        header: "PROFILE",
        listItems: ["SOFTWARE DEV ENGINEER II", "FULL-STACK DEV", "AMAZON"],
      },
      {
        header: "STATISTICS",
        listItems: ["3 YOE", "BS COMP SCI", "UMD, COLLEGE PARK"],
      },
      {
        header: "INTERESTS",
        listItems: ["PC BUILDS", "KEYBOARD BUILDS", "FRONTEND NEWS"],
      },
    ],
  };
  return (
    <S.Grid>
      <BoxItem content={text.contentItems[0]} showTextOnMobile />
      <BoxItem content={text.contentItems[1]} showTextOnMobile />
      <BoxItem content={text.contentItems[2]} showTextOnMobile />
    </S.Grid>
  );
};
