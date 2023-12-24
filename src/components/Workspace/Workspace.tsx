import { IndentedContainer } from "../../App.styles";
import { BoxGrid } from "../BoxGrid/BoxGrid";

export const Workspace = () => {
    const text = {
        title: "WORKSPACE",
        contentItems: [
            {
                header: "DESKTOP",
                listItems: ["LIAN LI O11D", "RYZEN 5 5600X", "MSI RTX 3070"],
                bgImg: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
                bgImgAlt: "Image of PC Desktop",
            },
            {
                header: "",
                listItems: [],
            },
            {
                header: "KEYBOARD",
                listItems: ["BAKENEKO 65", "NK SILK REDS", "GMK HONOR"],
            },
            {
                header: "MOUSE",
                listItems: ["HATI HTS ACE", "KAILH GM 8.0", "PIXART PAW3370"],
            },
        ],
    };
    return (
        <IndentedContainer>
            <h3>{text.title}</h3>
            <BoxGrid contentList={text.contentItems} />
        </IndentedContainer>
    );
};
