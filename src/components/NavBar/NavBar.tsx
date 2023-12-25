import { S } from "./NavBar.styles";

export const NavBar = () => {
    return (
        <S.Container>
            <S.Name>ASHAN PANDUWAWALA</S.Name>
            <S.Ul>
                <li>INTRODUCTION</li>
                <li>TECHNOLOGY // EXPERIENCE</li>
                <li>WORKSPACE</li>
                <li style={{ marginTop: "1.5rem" }}>PROJECTS →</li>
            </S.Ul>
            <S.Contact>CONTACT</S.Contact>
        </S.Container>
    );
};
