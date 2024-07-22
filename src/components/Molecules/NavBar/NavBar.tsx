import { motion, useAnimate } from 'framer-motion';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { S } from './NavBar.styles';
import { ListAnimationVariants, TextListContainerVariants, TextListItemVariants } from '../../../utils/Constants';
import { useEffect } from 'react';

export const NavBar = () => {
  const text = {
    homeText: 'ASHAN PANDUWAWALA',
    navItems: ['INTRODUCTION', 'TECHNOLOGY // EXPERIENCE', 'WORKSPACE', 'PROJECTS →'],
    contactText: 'CONTACT',
  };
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate('#name-container', { opacity: 1 }, { duration: 0.8, delay: 0.5 }).then(() => {
      animate('#name-container', { marginTop: 0 }, { duration: 0.7, delay: 0.5, type: 'tween', ease: 'easeInOut' });
    });
  }, []);

  const listContainerVariants = {
    initial: {},
    animate: {
      ...TextListContainerVariants.animate,
      transition: {
        ...TextListContainerVariants.animate.transition,
        delayChildren: 3.3,
      },
    },
  };

  return (
    <S.Container ref={scope}>
      <S.Name initial={{ opacity: 0, marginTop: '50dvh' }} id="name-container">
        <S.A
          href={`#${text.homeText}`}
          whileHover={{ color: ColorTokens.quartenary }}
          initial={{ color: ColorTokens.quartenary }}
          animate={{ color: '#000', transition: { delay: 2.8, duration: 0.2 } }}
        >
          {text.homeText}
        </S.A>
      </S.Name>

      <S.Ul variants={listContainerVariants} initial="initial" whileInView="animate">
        {text.navItems.map((s, idx) => (
          <motion.li key={idx} variants={TextListItemVariants}>
            <S.A href={`#${s.toLowerCase()}`} whileHover={{ color: ColorTokens.quartenary }}>
              {idx === text.navItems.length - 1 && <div style={{ marginTop: '1.5rem' }}></div>}
              {s}
            </S.A>
          </motion.li>
        ))}
      </S.Ul>
      <S.Contact initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 4.6 } }}>
        <S.A href={`#${text.contactText}`} whileHover={{ color: ColorTokens.quartenary }}>
          {text.contactText}
        </S.A>
      </S.Contact>
    </S.Container>
  );
};
