import { motion } from "framer-motion";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
import { S } from "./NavBar.styles";
import {
  ListAnimationVariants,
  TextListContainerVariants,
  TextListItemVariants,
} from "../../../utils/Constants";

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

  // const navbarListContainerVariants = {
  //   initial: {},
  //   animate: {
  //     transition: {
  //       ...TextListContainerVariants.animate.transition,
  //       delay: 6,
  //     },
  //   },
  // };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0, // this will set a delay before the children start animating
        staggerChildren: 1.3, // this will set the time inbetween children animation
      },
    },
  };
  const dropUpVariants = {
    hidden: {
      y: "100vw",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.3,
        // remove delay: 0.3,
      },
    },
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
          <motion.li
            variants={ListAnimationVariants}
            initial="hidden"
            animate="visible"
          >
            <S.A
              href={`#${s.toLowerCase()}`}
              whileHover={{ color: ColorTokens.quartenary }}
            >
              {idx === text.navItems.length - 1 && (
                <li style={{ marginTop: "1.5rem" }}></li>
              )}
              {s}
            </S.A>
          </motion.li>
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
