import { S } from './Contact.styles';
import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';
import { List } from '../../Atoms/List/List';
import { LazyLoadedVideo } from '../../Atoms/LazyLoadedVideo/LazyLoadedVideo';
import { circleAnimationVariants, contactTitleAnimationVariants } from './Contact.animations';
import { contactText } from './Contact.text';
export const Contact = () => {
  return (
    <>
      <S.Container id={contactText.id}>
        <S.StickyContainer>
          <S.Title initial="initial" whileInView="animate" variants={contactTitleAnimationVariants}>
            {contactText.title}
          </S.Title>
        </S.StickyContainer>

        <IndentedContainer>
          <S.VideoContainer>
            <LazyLoadedVideo
              sources={[
                { src: contactText.coverVideo.src, type: 'webm', useSrcSet: true },
                { src: contactText.coverVideo.src, type: 'mp4', useSrcSet: false },
              ]}
              ariaLabel={contactText.coverVideo.alt}
              aspectRatio="3/1"
            />
          </S.VideoContainer>
          <List contentItems={contactText.contentItems} useDarkMode />
          <S.Circle variants={circleAnimationVariants} initial="initial" whileInView="animate">
            {contactText.farewellMessage}
          </S.Circle>
        </IndentedContainer>
      </S.Container>
    </>
  );
};
