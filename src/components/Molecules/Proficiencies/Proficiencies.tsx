import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';
import { List } from '../../Atoms/List/List';

export const Proficiencies = () => {
  const text = {
    title: 'PROFICIENCY',
    index: 1,
    contentItems: [
      { label: 'FRONTEND DEVELOPMENT', value: 'INTERMEDIATE' },
      { label: 'BACKEND DEVELOPMENT', value: 'ADVANCED' },
      { label: 'CLOUD DEVELOPMENT', value: 'INTERMEDIATE' },
      { label: 'ML // AI DEVELOPMENT', value: 'NOVICE' },
    ],
  };

  return (
    <IndentedContainer index={text.index} title={text.title}>
      <List contentItems={text.contentItems} />
    </IndentedContainer>
  );
};
