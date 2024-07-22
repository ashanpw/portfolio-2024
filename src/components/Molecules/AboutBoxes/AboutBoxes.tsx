import { BoxItem } from '../../Atoms/BoxItem/BoxItem';
import { S } from './AboutBoxes.styles';

export const AboutBoxes = () => {
  const text = {
    title: 'TECHNOLOGY',
    contentItems: [
      {
        header: 'PROFILE',
        listItems: ['SOFTWARE DEV ENGINEER II', 'FULL-STACK', 'AMAZON'],
      },
      {
        header: 'STATISTICS',
        listItems: ['3 YOE', 'BS COMP SCI', 'UMD, COLLEGE PARK'],
      },
      {
        header: 'INTERESTS',
        listItems: ['PC BUILDS', 'KEYBOARD BUILDS', 'FRONTEND NEWS'],
      },
    ],
  };
  return (
    <S.Grid id="introduction">
      <BoxItem content={text.contentItems[0]} />
      <BoxItem content={text.contentItems[1]} />
      <BoxItem content={text.contentItems[2]} />
    </S.Grid>
  );
};
