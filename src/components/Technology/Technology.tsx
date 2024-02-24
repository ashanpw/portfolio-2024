import { BoxGrid } from "../BoxGrid/BoxGrid";
import { IndentedContainer } from "../IndentedContainer/IndentedContainer";

export const Technology = () => {
  const text = {
    title: "TECHNOLOGY",
    index: 1,
    contentItems: [
      {
        header: "FRONTEND",
        listItems: [
          "NODEJS",
          "REACT // TYPESCRIPT",
          "PLAYWRIGHT",
          "STORYBOOK",
          "NEXTJS",
          "FRAMER MOTION",
        ],
      },
      {
        header: "CLOUD",
        listItems: [
          "AWS ECS // FARGATE",
          "DOCKER",
          "AWS LAMBDA",
          "AWS CDK",
          "PIPELINES // AUTOMATION",
          "INTEGRATION TESTING",
        ],
      },
      {
        header: "BACKEND",
        listItems: [
          "JAX-RS",
          "GRAPHQL",
          "AREST",
          "APACHE",
          "GUICE // DAGGER",
          "LOMBOK",
        ],
      },
      {
        header: "ML // AI",
        listItems: ["PYTORCH", "TENSORFLOW", "NUMPY // PANDAS"],
      },
    ],
  };
  return (
    <IndentedContainer index={text.index} title={text.title}>
      <BoxGrid contentList={text.contentItems} />
    </IndentedContainer>
  );
};
