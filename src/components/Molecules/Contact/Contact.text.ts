import { AssetBucketUrlPrefix } from '../../../utils/Constants';

export const contactText = {
  title: 'CONTACT',
  id: 'contact',
  index: 3,
  contentItems: [
    { label: 'LOCATION', value: 'UNITED STATES' },
    { label: 'EMAIL', value: 'ASHAN399@GMAIL.COM' },
    {
      label: 'SOCIAL',
      value: 'LINKEDIN',
      url: 'https://www.linkedin.com/in/ashanpw/',
    },
    {
      label: 'CODE',
      value: 'GITHUB',
      url: 'https://github.com/ashanpw/',
    },
  ],
  coverVideo: {
    src: `${AssetBucketUrlPrefix}/contact/wavesBlue`,
    type: 'video',
    alt: 'Video showing several purple lines moving in a wave-like pattern',
  },
  farewellMessage: 'THANKS FOR VISITING',
};
