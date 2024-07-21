import { BoxGrid } from '../../Atoms/BoxGrid/BoxGrid';
import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';

export const Technology = () => {
  const text = {
    title: 'TECHNOLOGY',
    index: 2,
    contentItems: [
      {
        header: 'FRONTEND',
        listItems: ['NODEJS', 'REACT', 'PLAYWRIGHT', 'STORYBOOK', 'NEXTJS', 'FRAMER MOTION'],
      },
      {
        header: 'ML / AI',
        listItems: ['PYTORCH', 'TENSORFLOW', 'NUMPY // PANDAS'],
      },
      {
        header: 'CLOUD',
        listItems: ['DOCKER', 'AWS LAMBDA', 'AWS CDK', 'PIPELINES', 'AWS ECS // FARGATE', 'INTEGRATION TESTING'],
      },
      {
        header: 'BACKEND',
        listItems: ['JAX-RS', 'GRAPHQL', 'AREST', 'APACHE', 'GUICE // DAGGER', 'LOMBOK'],
      },
    ],
  };
  return (
    <IndentedContainer index={text.index} title={text.title}>
      <BoxGrid contentList={text.contentItems} />
    </IndentedContainer>
  );
};
