import { IndentedContainer } from "../../App.styles";
import { S } from "./Proficiencies.styles";

export const Proficiencies = () => {
    const text = {
        title: "PROFICIENCY",
        contentItems: [
            { label: "FRONTEND DEVELOPMENT", value: "INTERMEDIATE" },
            { label: "BACKEND DEVELOPMENT", value: "ADVANCED" },
            { label: "CLOUD DEVELOPMENT", value: "INTERMEDIATE" },
            { label: "ML // AI DEVELOPMENT", value: "NOVICE" },
        ],
    };
    const proficiencyItems = text.contentItems.map((p, idx) => (
        <>
            {idx === 0 && <S.Line />}
            <S.Grid>
                <S.Label>{p.label}</S.Label>
                <S.Value>{p.value}</S.Value>
            </S.Grid>
            <S.Line />
        </>
    ));

    return (
        <IndentedContainer>
            <h3>{text.title}</h3>
            {proficiencyItems}
        </IndentedContainer>
    );
};
