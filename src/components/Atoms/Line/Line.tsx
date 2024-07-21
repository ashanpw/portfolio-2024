import { LineAnimationVariants } from '../../../utils/Constants';
import { S } from './Line.styles';

export const Line = (props: { useDarkMode?: boolean }) => {
  return (
    <S.Line initial="initial" whileInView="animate" variants={LineAnimationVariants} $useDarkMode={props.useDarkMode} />
  );
};
