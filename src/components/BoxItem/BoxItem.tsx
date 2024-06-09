import { animate, motion, useAnimate } from "framer-motion";
import { S } from "./BoxItem.styles";
import { BoxItemProps } from "./BoxItem.types";
import { ListAnimationVariants } from "../../utils/Constants";

export const BoxItem = (props: BoxItemProps) => {
  const { bgImg, bgImgAlt, header, listItems, idx } = props.content;
  const [scope, animate] = useAnimate();
  const showBGImage = () => {
    animate("img", { opacity: 1 }, { ease: "linear" });
  };
  const hideBGImage = () => {
    animate("img", { opacity: 0 }, { ease: "linear" });
  };

  const textContainerVariants = {
    initial: {},
    animate: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const textItemVariants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
      },
    },
  };

  return (
    <S.FlexBox
      ref={scope}
      onMouseEnter={showBGImage}
      onMouseLeave={hideBGImage}
      useDarkMode={props.useDarkMode}
    >
      <S.BGImage src={bgImg} alt={bgImgAlt} initial={{ opacity: 0 }} />
      <S.HorizontalContainer>
        <S.H4 useDarkMode={props.useDarkMode}>{header}</S.H4>
        {idx && <h4>/0{idx}</h4>}
      </S.HorizontalContainer>
      <S.TextItem
        showText={props.showTextOnMobile ?? false}
        variants={textContainerVariants}
        initial="initial"
        whileInView="animate"
      >
        {listItems.map((i) => (
          <motion.p variants={textItemVariants}>{i}</motion.p>
        ))}
      </S.TextItem>
    </S.FlexBox>
  );
};
