import { IndentedContainer } from "../IndentedContainer/IndentedContainer";
import {
  LineAnimationVariants,
  ListAnimationVariants,
} from "../../utils/Constants";
import { S } from "./Proficiencies.styles";

export const Proficiencies = () => {
  const text = {
    title: "PROFICIENCY",
    index: 3,
    contentItems: [
      { label: "FRONTEND DEVELOPMENT", value: "INTERMEDIATE" },
      { label: "BACKEND DEVELOPMENT", value: "ADVANCED" },
      { label: "CLOUD DEVELOPMENT", value: "INTERMEDIATE" },
      { label: "ML // AI DEVELOPMENT", value: "NOVICE" },
    ],
  };

  const lineAnimationVariants = {};
  const proficiencyItems = text.contentItems.map((p, idx) => (
    <>
      {idx === 0 && (
        <S.Line
          initial="initial"
          whileInView="animate"
          variants={LineAnimationVariants}
        />
      )}
      <S.Grid
        initial="initial"
        whileInView="animate"
        variants={ListAnimationVariants}
      >
        <S.Label>{p.label}</S.Label>
        <S.Value>{p.value}</S.Value>
      </S.Grid>
      <S.Line
        initial="initial"
        whileInView="animate"
        variants={LineAnimationVariants}
      />
    </>
  ));

  return (
    <IndentedContainer index={text.index} title={text.title}>
      {proficiencyItems}
    </IndentedContainer>
  );
};
