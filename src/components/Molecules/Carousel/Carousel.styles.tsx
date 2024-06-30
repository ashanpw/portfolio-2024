import styled from "styled-components";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";

export const EmblaDiv = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
  border: 1px solid black;
`;

export const EmblaContainer = styled.div<{ isMobile: boolean }>`
  aspect-ratio: ${(props) => (props.isMobile ? "9/16" : "16/9")};
  display: flex;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  max-width: 100%;
  background-color: ${ColorTokens.background};
`;
