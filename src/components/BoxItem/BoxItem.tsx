import { animate, useAnimate } from "framer-motion";
import { S } from "./BoxItem.styles";
import { BoxItemProps } from "./BoxItem.types";

export const BoxItem = (props: BoxItemProps) => {
    const { bgImg, bgImgAlt, header, listItems } = props.content;
    const [scope, animate] = useAnimate();
    const showBGImage = () => {
        animate("img", { opacity: 1 }, { ease: "linear" });
    };
    const hideBGImage = () => {
        animate("img", { opacity: 0 }, { ease: "linear" });
    };

    return (
        <S.FlexBox
            ref={scope}
            onMouseEnter={showBGImage}
            onMouseLeave={hideBGImage}
        >
            <S.BGImage src={bgImg} alt={bgImgAlt} initial={{ opacity: 0 }} />

            <h4>{header}</h4>
            <S.TextItem showText={props.showTextOnMobile ?? false}>
                {listItems.map((i) => (
                    <p>{i}</p>
                ))}
            </S.TextItem>
        </S.FlexBox>
    );
};
