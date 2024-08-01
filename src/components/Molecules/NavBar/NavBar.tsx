import { motion, useAnimate } from 'framer-motion';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { S } from './NavBar.styles';
import { TextListContainerVariants, TextListItemVariants } from '../../../utils/Constants';
import { useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

export const NavBar = () => {
  const text = {
    homeText: 'ASHAN PANDUWAWALA',
    homeId: 'home',
    navItems: ['INTRODUCTION', 'CODE // TECHNOLOGY', 'EXPERIENCE', 'PROJECTS →'],
    navIds: ['introduction', 'lines-of-code', 'experience', 'projects'],
    contactId: 'contact',
    contactText: 'CONTACT',
  };
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate('#name-container', { opacity: 1 }, { duration: 0.8, delay: 0.5 }).then(() => {
      animate('#name-container', { marginTop: 0 }, { duration: 0.7, delay: 0.4, type: 'tween', ease: 'easeInOut' });
    });
  }, []);

  const listContainerVariants = {
    initial: {},
    animate: {
      ...TextListContainerVariants.animate,
      transition: {
        ...TextListContainerVariants.animate.transition,
        delayChildren: 3,
      },
    },
  };

  const lenis = useLenis();
  const elementScrollHandler = (id: string) => {
    lenis?.scrollTo(id);
  };
  return (
    <S.Container ref={scope}>
      <S.Name initial={{ opacity: 0, marginTop: '50dvh' }} id="name-container">
        <S.A
          initial={{ color: ColorTokens.quartenary }}
          animate={{ color: '#000', transition: { delay: 2.7, duration: 0.2 } }}
          href={`#${text.homeId}`}
          onClick={() => elementScrollHandler(`#${text.homeId}`)}
        >
          {text.homeText}
        </S.A>
      </S.Name>

      <S.Ul variants={listContainerVariants} initial="initial" whileInView="animate">
        {text.navItems.map((s, idx) => (
          <motion.li key={idx} variants={TextListItemVariants}>
            <S.A
              whileHover={{ color: ColorTokens.quartenary }}
              href={`#${text.navIds[idx]}`}
              onClick={() => elementScrollHandler(`#${text.navIds[idx]}`)}
            >
              {idx === text.navItems.length - 1 && <div style={{ marginTop: '1.5rem' }}></div>}
              {s}
            </S.A>
          </motion.li>
        ))}
      </S.Ul>
      <S.Contact initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 4.2 } }}>
        <S.A
          whileHover={{ color: ColorTokens.quartenary }}
          onClick={() => elementScrollHandler(`#${text.contactId}`)}
          href={`#${text.contactId}`}
        >
          {text.contactText}
        </S.A>
      </S.Contact>
    </S.Container>
  );
};
