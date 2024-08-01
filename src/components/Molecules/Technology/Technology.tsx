import { BoxGrid } from '../../Atoms/BoxGrid/BoxGrid';
import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';
import { technologyText } from './Technology.text';

export const Technology = () => {
  return (
    <IndentedContainer index={technologyText.index} title={technologyText.title}>
      <BoxGrid contentList={technologyText.contentItems} />
    </IndentedContainer>
  );
};
