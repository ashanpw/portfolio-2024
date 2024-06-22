import { ColorTokens } from "../../../ColorTokens/ColorTokens";
import { S } from "./NavBar.styles";

export const NavBar = () => {
  const text = {
    homeText: "ASHAN PANDUWAWALA",
    navItems: [
      "INTRODUCTION",
      "TECHNOLOGY // EXPERIENCE",
      "WORKSPACE",
      "PROJECTS →",
    ],
    contactText: "CONTACT",
  };

  return (
    <S.Container>
      <S.Name>
        <S.A
          href={`#${text.homeText}`}
          whileHover={{ color: ColorTokens.quartenary }}
        >
          {text.homeText}
        </S.A>
      </S.Name>
      <S.Ul>
        {text.navItems.map((s, idx) => (
          <li>
            <S.A href={`#${s}`} whileHover={{ color: ColorTokens.quartenary }}>
              {idx === text.navItems.length - 1 && (
                <li style={{ marginTop: "1.5rem" }}></li>
              )}
              {s}
            </S.A>
          </li>
        ))}
      </S.Ul>
      <S.Contact>
        <S.A
          href={`#${text.contactText}`}
          whileHover={{ color: ColorTokens.quartenary }}
        >
          {text.contactText}
        </S.A>
      </S.Contact>
    </S.Container>
  );
};
