import { motion } from 'framer-motion';
import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';
import { Carousel } from '../Carousel/Carousel';
import { S } from './Projects.styles';
import { AssetBucketUrlPrefix, LineAnimationVariants, ListAnimationVariants } from '../../../utils/Constants';
import { ProjectsHeader } from '../ProjectsHeader/ProjectsHeader';

export const Projects = () => {
  const assetBucketProjectUrlPrefix = `${AssetBucketUrlPrefix}/projects`;
  const text = {
    title: 'PROJECTS',
    contentItems: [
      {
        name: 'PROJECT WIND',
        date: 'REACT, TS',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!',
        mediaList: [
          {
            src: `${assetBucketProjectUrlPrefix}/project-wind/projectWindMain`,
            type: 'video',
            alt: 'A home page for a portfolio website I created with video of wind moving in the background',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-wind/projectWindAbout`,
            type: 'video',
            alt: 'About page for my portfolio website which displays my education and areas of expertise',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-wind/projectWindExperience`,
            type: 'image',
            alt: 'Image of the experience page of my portfolio website which displays a video of a samurai and a list of my work experience',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-wind/projectWindProjects`,
            type: 'image',
            alt: "Several images and videos of projects I've created in the past displayed in a grid",
          },
        ],
      },
      {
        name: 'QUARANTINE APP',
        date: 'AUG - SEP 2019',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!',
        mediaList: [
          {
            src: `${assetBucketProjectUrlPrefix}/quarantine/quarantine`,
            type: 'video',
            alt: 'A picture of a banana is taken and a list of identified items in the image are shown. The user picks one and adds it to the list.',
          },
        ],
      },
      {
        name: 'DROWSINESS DETECTION SYSTEM',
        date: 'ML',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!',
        mediaList: [
          {
            src: `${assetBucketProjectUrlPrefix}/drowsiness-detection/drowsinessDetection`,
            type: 'video',
            alt: 'Video of a female talking and driving. Her mouth and eyes have boxes around them to track her movement.',
          },
        ],
      },
      {
        name: 'PROJECT MOON',
        date: 'FRONTEND',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!',
        mediaList: [
          {
            src: `${assetBucketProjectUrlPrefix}/project-moon/projectMoonPlacesVisited`,
            type: 'video',
            alt: 'A carousel of images showing locations visited',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-moon/projectMoonMain`,
            type: 'image',
            alt: 'Home page of the portfolio website',
          },

          {
            src: `${assetBucketProjectUrlPrefix}/project-moon/projectMoonStats`,
            type: 'image',
            alt: 'A grid of text showing statistics',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-moon/projectMoonAbout`,
            type: 'image',
            alt: 'Image of myself with some statistics and a personal statement',
          },
        ],
      },
      {
        name: 'STORYBOARD APP',
        date: 'MOBILE',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!',
        mediaList: [
          {
            src: `${assetBucketProjectUrlPrefix}/story-board/storyboardMain`,
            type: 'video',
            alt: 'Video showing a mobile phone with 2 columns of squares where each square is a storyboard post',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/story-board/storyboardPost`,
            type: 'video',
            alt: 'Typing a comment and clicking the users name to open their posts',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/story-board/storyboardFirebasePost`,
            type: 'image',
            alt: "Image of the database structure on Google's Firebase website",
          },
          {
            src: `${assetBucketProjectUrlPrefix}/story-board/storyboardFirebaseComments`,
            type: 'image',
            alt: "Image of the database structure for comments on Google's Firebase website",
          },
        ],
      },

      {
        name: 'PEDESTRIAN DETECTION SYSTEM',
        date: 'ML',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!',
        mediaList: [
          {
            src: `${assetBucketProjectUrlPrefix}/pedestrian-detection/pedestrianDetection`,
            type: 'image',
            alt: 'Image of several pedestrians walking with a neon green square around them showing if they were detected.',
          },
        ],
      },
    ],
  };

  const textContainerVariants = {
    initial: {},
    animate: {
      transition: {
        when: 'beforeChildren',
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
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <ProjectsHeader />
      <S.Container>
        {text.contentItems.map((p, idx) => {
          return (
            <S.ContainerItem key={idx}>
              <Carousel mediaList={p.mediaList} />
              <S.TextItem $idx={idx} variants={textContainerVariants} initial="initial" whileInView="animate">
                <motion.div variants={descriptionAnimationVariants}>
                  <S.Title>{p.name}</S.Title>
                  <S.Date>{p.date}</S.Date>
                </motion.div>
                <S.Description variants={descriptionAnimationVariants}>{p.description}</S.Description>
              </S.TextItem>
            </S.ContainerItem>
          );
        })}
      </S.Container>
    </>
  );
};
