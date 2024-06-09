import { motion } from "framer-motion";
import { IndentedContainer } from "../IndentedContainer/IndentedContainer";
import { Carousel } from "../Carousel/Carousel";
import { ProjectsHeader } from "../ProjectsHeader/ProjectsHeader";
import { S } from "./Projects.styles";
import {
  LineAnimationVariants,
  ListAnimationVariants,
} from "../../utils/Constants";

export const Projects = () => {
  const text = {
    title: "PROJECTS",
    contentItems: [
      {
        name: "DRIVER DROWSINESS DETECTION SYSTEM",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
            type: "img",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "PC SETUP",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
            type: "img",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "PC SETUP",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
            type: "img",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "PC SETUP",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
            type: "img",
          },
        ],
        mediaAlt: "",
      },
    ],
  };

  const textContainerVariants = {
    initial: {},
    animate: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
  };
  const descriptionAnimationVariants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <ProjectsHeader />

      <S.Container>
        <IndentedContainer>
          <S.Line
            variants={LineAnimationVariants}
            initial="initial"
            whileInView="animate"
          />
        </IndentedContainer>
        {text.contentItems.map((p, idx) => {
          return (
            <>
              <S.ContainerItem idx={idx}>
                <Carousel />
                <S.TextItem
                  idx={idx}
                  variants={textContainerVariants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.div variants={descriptionAnimationVariants}>
                    <p style={{ marginBottom: "0.8rem" }}>{p.name}</p>
                    <S.Date>{p.date}</S.Date>
                  </motion.div>
                  <S.Description variants={descriptionAnimationVariants}>
                    {p.description}
                  </S.Description>
                </S.TextItem>
              </S.ContainerItem>
              <IndentedContainer>
                <S.Line
                  variants={LineAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                />
              </IndentedContainer>
            </>
          );
        })}
      </S.Container>
    </>
  );
};
