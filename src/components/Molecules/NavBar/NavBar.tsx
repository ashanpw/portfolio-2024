import { motion, useAnimate } from 'framer-motion';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { S } from './NavBar.styles';
import { TextListContainerVariants, TextListItemVariants } from '../../../utils/Constants';
import { useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { navBarText } from './NavBar.text';
import { listContainerVariants } from './NavBar.animations';

export const NavBar = () => {
  const [scope, animate] = useAnimate();
  const lenis = useLenis();

  useEffect(() => {
    animate('#name-container', { opacity: 1 }, { duration: 0.8, delay: 0.5 }).then(() => {
      animate('#name-container', { marginTop: 0 }, { duration: 0.6, delay: 0.4, type: 'tween', ease: 'easeInOut' });
    });
  }, []);

  const elementScrollHandler = (id: string) => {
    lenis?.scrollTo(id);
  };

  return (
    <S.Container ref={scope}>
      <S.Name initial={{ opacity: 0, marginTop: '50dvh' }} id="name-container">
        <S.A
          initial={{ color: ColorTokens.quartenary }}
          animate={{ color: '#000', transition: { delay: 2.6, duration: 0.2 } }}
          href={`#${navBarText.homeId}`}
          onClick={() => elementScrollHandler(`#${navBarText.homeId}`)}
        >
          {navBarText.homeText}
        </S.A>
      </S.Name>

      <S.Ul variants={listContainerVariants} initial="initial" whileInView="animate">
        {navBarText.navItems.map((s, idx) => (
          <motion.li key={idx} variants={TextListItemVariants}>
            <S.A
              whileHover={{ color: ColorTokens.quartenary }}
              href={`#${navBarText.navIds[idx]}`}
              onClick={() => elementScrollHandler(`#${navBarText.navIds[idx]}`)}
            >
              {idx === navBarText.navItems.length - 1 && <div style={{ marginTop: '1.5rem' }}></div>}
              {s}
            </S.A>
          </motion.li>
        ))}
      </S.Ul>
      <S.Contact initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 4.1 } }}>
        <S.A
          whileHover={{ color: ColorTokens.quartenary }}
          onClick={() => elementScrollHandler(`#${navBarText.contactId}`)}
          href={`#${navBarText.contactId}`}
        >
          {navBarText.contactText}
        </S.A>
      </S.Contact>
    </S.Container>
  );
};
