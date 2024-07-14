import { S } from './Contact.styles';
import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';
import { List } from '../../Atoms/List/List';
import { AssetBucketUrlPrefix } from '../../../utils/Constants';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
export const Contact = () => {
  const circleAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
      rotate: -180,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        ease: 'easeOut',
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  const text = {
    title: 'CONTACT',
    index: 3,
    contentItems: [
      { label: 'LOCATION', value: 'UNITED STATES' },
      { label: 'EMAIL', value: 'ASHAN399@GMAIL.COM' },
      {
        label: 'SOCIAL',
        value: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/ashanpandu/',
      },
      {
        label: 'CODE',
        value: 'GITHUB',
        url: 'https://github.com/ashanpw/',
      },
    ],
    coverImage: {
      fallBack: `${AssetBucketUrlPrefix}/contact/abstractArtBackground-large.webp`,
      srcSet: [
        `${AssetBucketUrlPrefix}/contact/abstractArtBackground-large.webp 1500w`,
        `${AssetBucketUrlPrefix}/contact/abstractArtBackground-medium.webp 1000w`,
        `${AssetBucketUrlPrefix}/contact/abstractArtBackground-small.webp 500w`,
      ],
      title: 'CANNY EDGE DETECTION PYTHON SCRIPT',
      alt: 'An image of abstract art which was run through a canny edge detection script in Python',
    },
  };
  return (
    <>
      <S.Container>
        <S.Title>CONTACT</S.Title>
        <IndentedContainer>
          <S.FlexBox>
            <S.Image
              src={text.coverImage.fallBack}
              srcSet={text.coverImage.srcSet.join(', ')}
              sizes="(min-width: 768px) 66.6vw, 100vw"
              alt={text.coverImage.alt}
            />
            <S.P>{text.coverImage.title}</S.P>
          </S.FlexBox>

          <List contentItems={text.contentItems} useDarkMode />

          <S.Circle variants={circleAnimationVariants} initial="initial" whileInView="animate">
            THANKS FOR VISITING
          </S.Circle>
        </IndentedContainer>
      </S.Container>
    </>
  );
};
