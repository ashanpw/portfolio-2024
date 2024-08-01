import { motion } from 'framer-motion';
import { Carousel } from '../Carousel/Carousel';
import { S } from './Projects.styles';
import { ProjectsHeader } from '../ProjectsHeader/ProjectsHeader';
import { projectsText } from './Projects.text';
import { textContainerVariants, descriptionAnimationVariants } from './Projects.animations';

export const Projects = () => {
  return (
    <>
      <ProjectsHeader />
      <S.Container id="projects">
        {projectsText.contentItems.map((p, idx) => {
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
