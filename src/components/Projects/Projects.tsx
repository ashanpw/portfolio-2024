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
        name: "PROJECT WIND",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/project-wind/projectWindMain.mp4",
            type: "video",
          },
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/project-wind/projectWindAbout.mp4",
            type: "video",
          },
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/project-wind/projectWindExperience.png",
            type: "image",
          },
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/project-wind/projectWindProjects.png",
            type: "image",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "PROJECT MOON",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/project-moon/projectMoonMain.png",
            type: "image",
          },
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/project-moon/projectMoonPlacesVisited.mp4",
            type: "video",
          },
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/project-moon/projectMoonStats.png",
            type: "image",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "PEDESTRIAN DETECTION SYSTEM",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/pedestrian-detection/pedestrianDetection.png",
            type: "image",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "STORYBOARD APP",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/story-board/storyBoardMain.png",
            type: "image",
          },
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/story-board/storyBoardMain.png",
            type: "image",
          },
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/story-board/storyBoardLogin.png",
            type: "image",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "QUARANTINE APP",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/quarantine/quarantinePoster.png",
            type: "image",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "DROWSINESS DETECTION SYSTEM",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/drowsiness-detection/drowsinessDetection.mp4",
            type: "video",
          },
        ],
        mediaAlt: "",
      },
      {
        name: "JUMP MAN",
        date: "AUG - SEP 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
        mediaList: [
          {
            src: "https://ashanpw-asset-bucket.s3.amazonaws.com/projects/jump-man-game/jumpmanGame.png",
            type: "image",
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

  console.log(text.contentItems);

  return (
    <>
      <ProjectsHeader />

      <S.Container>
        <S.Line
          variants={LineAnimationVariants}
          initial="initial"
          whileInView="animate"
        />

        {text.contentItems.map((p, idx) => {
          return (
            <>
              <S.ContainerItem idx={idx}>
                <Carousel mediaList={p.mediaList} />
                <S.TextItem
                  idx={idx}
                  variants={textContainerVariants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.div variants={descriptionAnimationVariants}>
                    <S.Title style={{ marginBottom: "0.8rem" }}>
                      {p.name}
                    </S.Title>
                    <S.Date>{p.date}</S.Date>
                  </motion.div>
                  <S.Description variants={descriptionAnimationVariants}>
                    {p.description}
                  </S.Description>
                </S.TextItem>
              </S.ContainerItem>

              <S.Line
                variants={LineAnimationVariants}
                initial="initial"
                whileInView="animate"
              />
            </>
          );
        })}
      </S.Container>
    </>
  );
};
