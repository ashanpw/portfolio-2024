import styled from "styled-components";

export const EmblaDiv = styled.div`
  margin-bottom: 5rem;
  margin-right: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
`;

export const EmblaContainer = styled.div<{ isMobile: boolean }>`
  aspect-ratio: ${(props) => (props.isMobile ? "9/16" : "16/9")};
  display: flex;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  max-width: 100%;
  background-color: #000;
`;
