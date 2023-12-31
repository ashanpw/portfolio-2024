import { IndentedContainer } from "../../App.styles";
import { BoxGrid } from "../BoxGrid/BoxGrid";

export const Technology = () => {
    const text = {
        title: "TECHNOLOGY",
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
        <IndentedContainer>
            <h3>{text.title}</h3>
            <BoxGrid contentList={text.contentItems} />
        </IndentedContainer>
    );
};
