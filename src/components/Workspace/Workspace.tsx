import { IndentedContainer } from "../IndentedContainer/IndentedContainer";
import { BoxGrid } from "../BoxGrid/BoxGrid";
import { S } from "./Workspace.styles";

export const Workspace = () => {
  const text = {
    title: "WORKSPACE",
    contentItems: [
      {
        header: "DESKTOP",
        listItems: ["LIAN LI O11D", "RYZEN 5 5600X", "MSI RTX 3070"],
        bgImg:
          "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
        bgImgAlt: "Image of PC Desktop",
        idx: 1,
      },
      {
        header: "",
        listItems: [],
      },
      {
        header: "KEYBOARD",
        listItems: ["BAKENEKO 65", "NK SILK REDS", "GMK HONOR"],
        idx: 2,
      },
      {
        header: "MOUSE",
        listItems: ["HATI HTS ACE", "KAILH GM 8.0", "PIXART PAW3370"],
        idx: 3,
      },
    ],
  };
  return (
    <IndentedContainer>
      <S.H3>{text.title}</S.H3>
      <BoxGrid contentList={text.contentItems} />
    </IndentedContainer>
  );
};
