import styled from "styled-components/macro";

export const EmblaDiv = styled.div`
    max-width: 160rem;
    margin: auto;
    position: relative;
    margin-bottom: 5rem;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

export const EmblaViewport = styled.div`
    overflow: hidden;
    margin: 0 2.5rem 0 2.5rem;
    border: 1rem solid #2b2b2b;
    border-radius: 5rem;

    @media (min-width: 768px) {
        border-radius: 6.4rem;
        margin: 0 10rem 0 10rem;
    }
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
