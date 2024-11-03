import { AssetBucketUrlPrefix } from '../../../utils/Constants';

const assetBucketProjectUrlPrefix = `${AssetBucketUrlPrefix}/projects`;

export const projectsText = {
  title: 'PROJECTS',
  contentItems: [
    {
      name: 'PROJECT WIND',
      date: 'FRONTEND',
      description:
        'Second iteration of my portfolio website, codenamed "Project Wind". Designed with a wind-inspired flow and seamless GSAP transitions, built with React and JavaScript for interactivity.',
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
      date: 'MOBILE',
      description:
        "Created Quarantine, a food expiration manager for Android using Java, Google's Vision API, and Firebase. Users can log in to manage their groceries, add or delete items, and use the Vision API to label items from photos automatically.",
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
        'Under Professor Mohamed Teli, collaborated with students Hyekang Joo and Krishan Panduwawala to build a real-time driver drowsiness detection system using convolutional neural networks. Trained models to detect blinks, yawns, and driver actions, assessing drowsiness by analyzing yawn frequency and blink duration.',
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
        'Third iteration of my portfolio website, codenamed "Project Moon", featuring spherical elements and an industrial design. Built with React, TypeScript, Framer Motion, and Styled Components.',
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
      name: 'SEAM CARVING',
      date: 'CV',
      description:
        'Implemented a Content-Aware Seam Carving algorithm to resize images by removing low-importance pixel paths using gradients and dynamic programming.',
      mediaList: [
        {
          src: `${assetBucketProjectUrlPrefix}/seam-carving/seamCarving`,
          type: 'video',
          alt: 'A video of lady slowing inching towards a castle as the image is shrunk horizontally',
        },
      ],
    },
    {
      name: 'STORYBOARD APP',
      date: 'MOBILE',
      description:
        'Worked with students David Eluma and Krishan Panduwawala to develop an Android app for storyboard artists to share their work, receive feedback, and interact via comments, likes, and profile views. Built with Java and integrated Firebase for authentication and post storage.',
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
        'Created a pedestrian detection program with Python, PyTorch, OpenCV, and Pillow. Achieved 97.7% validation accuracy by fine-tuning the convolutional network and using dropout to prevent overfitting.',
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
