import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';
import { List } from '../../Atoms/List/List';
import { proficienciesText } from './Proficiencies.text';

export const Proficiencies = () => {
  return (
    <IndentedContainer index={proficienciesText.index} title={proficienciesText.title}>
      <List contentItems={proficienciesText.contentItems} />
    </IndentedContainer>
  );
};
