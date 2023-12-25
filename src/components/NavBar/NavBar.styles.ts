import styled from "styled-components";

const Container = styled.div`
    width: 100dvw;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    font-size: 1.3rem;
    line-height: 2.1rem;
    position: fixed;
    padding: 2rem;
    gap: 2rem;
    z-index: 99;
`;

const Name = styled.p`
    font-weight: 600;
    font-size: 1.4rem;
    margin: 0;
`;

const Contact = styled.p`
    justify-self: end;
    padding-right: 5rem;
    margin: 0;
`;

const Ul = styled.ul`
    list-style-type: none;
    @media (max-width: 1400px) {
        opacity: 0;
    }
`;

export const S = {
    Container,
    Name,
    Contact,
    Ul,
};
