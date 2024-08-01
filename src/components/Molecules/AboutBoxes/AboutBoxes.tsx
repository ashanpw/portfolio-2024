import { BoxItem } from '../../Atoms/BoxItem/BoxItem';
import { AboutText } from './About.text';
import { S } from './AboutBoxes.styles';

export const AboutBoxes = () => {
  return (
    <S.Grid id="introduction">
      <BoxItem content={AboutText.contentItems[0]} />
      <BoxItem content={AboutText.contentItems[1]} />
      <BoxItem content={AboutText.contentItems[2]} />
    </S.Grid>
  );
};
