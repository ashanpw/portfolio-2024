import { motion, useAnimate, useInView } from "framer-motion";
import { S } from "./Contact.styles";
import { useEffect, useRef } from "react";
import { BoxItem } from "../../Atoms/BoxItem/BoxItem";
import { Proficiencies } from "../Proficiencies/Proficiencies";
import { Introduction } from "../Introduction/Introduction";
import { IndentedContainer } from "../../Atoms/IndentedContainer/IndentedContainer";
import { List } from "../../Atoms/List/List";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
import {
  ListAnimationVariants,
  SourceAnimationVariant,
} from "../../../utils/Constants";
import { url } from "inspector";
const text = {};
export const Contact = () => {
  const [scope, animate] = useAnimate();

  const text = {
    title: "CONTACT",
    index: 3,
    contentItems: [
      { label: "LOCATION", value: "UNITED STATES" },
      { label: "EMAIL", value: "ASHAN399@GMAIL.COM" },
      {
        label: "SOCIAL",
        value: "LINKEDIN",
        url: "https://www.linkedin.com/in/ashanpandu/",
      },
      {
        label: "CODE",
        value: "GITHUB",
        url: "https://github.com/ashanpw/",
      },
    ],
  };
  return (
    <>
      <S.Container>
        <S.Title>CONTACT</S.Title>
        <IndentedContainer>
          <div
            style={{
              maxWidth: "100%",
              display: "flex",
              justifyContent: "center",
              border: `1px solid ${ColorTokens.secondary}`,
              padding: "10rem 5rem",
              marginBottom: "10rem",
            }}
          >
            <S.Image
              src="https://ashanpw-asset-bucket.s3.amazonaws.com/contact/japaneseHouseDarkFilter2.png"
              alt=""
              variants={SourceAnimationVariant}
              initial="initial"
              whileInView="animate"
            />
          </div>

          <List contentItems={text.contentItems} useDarkMode />
          <S.Circle
            variants={ListAnimationVariants}
            initial="initial"
            whileInView="animate"
          >
            THANKS FOR VISITING
          </S.Circle>
        </IndentedContainer>
      </S.Container>
    </>
  );
};
