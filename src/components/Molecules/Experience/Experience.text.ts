import { AssetBucketUrlPrefix } from '../../../utils/Constants';

export const experienceText = {
  title: 'EXPERIENCE',
  index: 3,
  id: 'experience',
  contentItems: [
    {
      company: 'SCALE AI',
      title: 'FULL-STACK SOFTWARE ENGINEER',
      org: 'GEN AI',
      date: 'JUL 2025 - PRESENT',
      description:
        'Built a service to routinely check for missing employee personal information and notify up to 3 million employees to update their data.',
      imgSrc: ``,
      imgAlt:
        "",
    },
    {
      company: 'AMAZON',
      title: 'SOFTWARE DEV ENGINEER II',
      org: 'PEOPLE ENGINE',
      date: 'NOV 2023 - JUL 2025',
      description:
        'Developing the GenAI platform for data labeling workflows that power model training for OpenAI, Google, and Meta.',
      imgSrc: `${AssetBucketUrlPrefix}/experience-assets/atozProfilePage.webp`,
      imgAlt:
        "Image of an Amazon employee's profile page showing a red banner at the top to indicate that they are missing personal information",
    },
    {
      company: 'AMAZON',
      title: 'SOFTWARE DEV ENGINEER II',
      org: 'AMAZON GAME STUDIOS',
      date: 'DEC 2021 - NOV 2023',
      description:
        'Part of the launch team for a new way of selling games on Amazon.com. The stack included a React / TypeScript frontend, and a GraphQL / Kotlin backend. Built the checkout system which handles purchasing and retrieving customer billing information.',
      imgSrc: `${AssetBucketUrlPrefix}/experience-assets/turboCheckoutError.webp`,
      imgAlt:
        'Image of a checkout modal to purchase a game with information such as ESRB rating, payment method, gift card balance, and a buy button.',
    },
    {
      company: 'AWS',
      title: 'SOFTWARE DEV ENGINEER I',
      org: 'AWS APP MESH',
      date: 'FEB 2021 - DEC 2021',
      description:
        'Engaged in on-call responsibilities, feature development, and contributed to regional infrastructure build-ups. Implemented a customer facing feature which allowed an Envoy proxy to intercept and manage DNS queries made by an application.',
      imgSrc: `${AssetBucketUrlPrefix}/experience-assets/appMesh.webp`,
      imgAlt: 'Image of the AWS App Mesh console.',
    },
  ],
};
