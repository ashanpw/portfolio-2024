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
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-wind/projectWindAbout`,
            type: 'video',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-wind/projectWindExperience`,
            type: 'image',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-wind/projectWindProjects`,
            type: 'image',
          },
        ],
        mediaAlt: '',
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
          },
        ],
        mediaAlt: '',
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
          },
        ],
        mediaAlt: '',
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
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-moon/projectMoonMain`,
            type: 'image',
          },

          {
            src: `${assetBucketProjectUrlPrefix}/project-moon/projectMoonStats`,
            type: 'image',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/project-moon/projectMoonAbout`,
            type: 'image',
          },
        ],
        mediaAlt: '',
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
          },
          {
            src: `${assetBucketProjectUrlPrefix}/story-board/storyboardPost`,
            type: 'video',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/story-board/storyboardFirebasePost`,
            type: 'image',
          },
          {
            src: `${assetBucketProjectUrlPrefix}/story-board/storyboardFirebaseComments`,
            type: 'image',
          },
        ],
        mediaAlt: '',
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
          },
        ],
        mediaAlt: '',
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
