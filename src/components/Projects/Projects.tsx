import { motion } from "framer-motion";
import { IndentedContainer } from "../IndentedContainer/IndentedContainer";
import { Carousel } from "../Carousel/Carousel";
import { ProjectsHeader } from "../ProjectsHeader/ProjectsHeader";
import { S } from "./Projects.styles";
import { ListAnimationVariants } from "../../utils/Constants";

export const Projects = () => {
  const text = {
    title: "PROJECTS",
    contentItems: [
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

  return (
    <>
      <ProjectsHeader />
      <IndentedContainer>
        <S.Line />
        {text.contentItems.map((p, idx) => {
          return (
            <motion.div
              variants={ListAnimationVariants}
              initial="initial"
              whileInView="visible"
            >
              <S.Container>
                <Carousel />
              </S.Container>
              <S.Grid>
                <div>
                  <p>{"/0" + (idx + 1)}</p>
                  <h5>{p.name}</h5>
                  <S.Date>{p.date}</S.Date>
                </div>

                <S.Description>{p.description}</S.Description>
              </S.Grid>

              <S.Line />
            </motion.div>
          );
        })}
      </IndentedContainer>
    </>
  );
};
