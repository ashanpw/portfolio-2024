import { IndentedContainer } from "../../App.styles";
import { S } from "./Experience.styles";

export const Experience = (props: any) => {
    const text = {
        title: "EXPERIENCE",
        contentItems: [
            {
                company: "AMAZON",
                title: "SOFTWARE DEVELOPMENT ENGINEER I",
                org: "AMAZON GAME STUDIOS",
                date: "AUG 2022 - PRESENT",
                description:
                    "Key member of an Amazon game sales initiative, responsible for constructing React frontend components and a Kotlin-GraphQL backend. Developed an efficient one-click checkout process by building and integrating frontend and backend systems, utilizing GraphQL for customer payment retrieval and seamless payment method updates on the website.",
                imgSrc: "",
                imgAlt: "",
            },
            {
                company: "AMAZON",
                title: "SOFTWARE DEVELOPMENT ENGINEER I",
                org: "AMAZON GAME STUDIOS",
                date: "AUG 2022 - PRESENT",
                description:
                    "Key member of an Amazon game sales initiative, responsible for constructing React frontend components and a Kotlin-GraphQL backend. Developed an efficient one-click checkout process by building and integrating frontend and backend systems, utilizing GraphQL for customer payment retrieval and seamless payment method updates on the website.",
                imgSrc: "",
                imgAlt: "",
            },
        ],
    };
    const experienceItems = text.contentItems.map((p, idx) => (
        <>
            {idx === 0 && <S.Line />}
            <S.Grid>
                <div>
                    <p>{"/0" + (idx + 1)}</p>
                    <S.Title>{p.company}</S.Title>
                    <S.SubSection>
                        <p>{p.title}</p>
                        <p>{p.org}</p>
                        <p>{p.date}</p>
                    </S.SubSection>
                </div>
                <S.Description>{p.description}</S.Description>
            </S.Grid>
            <S.Line />
        </>
    ));

    return (
        <IndentedContainer>
            <h3>{text.title}</h3>
            {experienceItems}
        </IndentedContainer>
    );
};
