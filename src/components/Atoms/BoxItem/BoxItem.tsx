import { motion, useAnimate } from 'framer-motion';
import { S } from './BoxItem.styles';
import { BoxItemProps } from './BoxItem.types';
import { TextListContainerVariants, TextListItemVariants } from '../../../utils/Constants';

export const BoxItem = (props: BoxItemProps) => {
  const { bgImg, bgImgAlt, header, listItems, idx } = props.content;
  const [scope, animate] = useAnimate();
  const showBGImage = () => {
    if (bgImg) {
      animate('img', { opacity: 1 }, { ease: 'linear' });
    }
  };
  const hideBGImage = () => {
    if (bgImg) {
      animate('img', { opacity: 0 }, { ease: 'linear' });
    }
  };

  return (
    <S.FlexBox ref={scope} onMouseEnter={showBGImage} onMouseLeave={hideBGImage} $useDarkMode={props.useDarkMode}>
      {bgImg && <S.BGImage src={bgImg} alt={bgImgAlt} initial={{ opacity: 0 }} />}
      <S.HorizontalContainer>
        <S.H4 $useDarkMode={props.useDarkMode}>{header}</S.H4>
        {idx && <h4>/0{idx}</h4>}
      </S.HorizontalContainer>
      <S.TextItem variants={TextListContainerVariants} initial="initial" whileInView="animate">
        {listItems.map((i, index) => (
          <motion.p variants={TextListItemVariants} key={index}>
            {i}
          </motion.p>
        ))}
      </S.TextItem>
    </S.FlexBox>
  );
};
