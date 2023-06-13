import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    bootstrap,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    google,
    meta,
    starbucks,
    tesla,
    shopify,
    github,
    farmigo,
    ytclone,
    filmvault,
    threejs,
    linkedIn,
    twitter,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Developer",
      icon: creator,
    },
  ];
  const social = [
    {
      title: "Github",
      icon: github,
      url:"https://github.com/ambesh333",
    },
    {
      title: "LinkedIn",
      icon: linkedIn,
      url:"https://www.linkedin.com/in/ambesh-gaunker-916548207/",
    },
    {
      title: "Twitter",
      icon: twitter,
      url:"https://twitter.com/AMBEZZ333",
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Google Cloud",
      icon: google,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FarmiGo",
      description:
        "A web-based marketplace facilitating the buying and selling of crops with added features such as Google translation and an AI chatbot for enhanced user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "BootStap5",
          color: "pink-text-gradient",
        },
      ],
      image: farmigo,
      
      source_code_link: "https://github.com/ManobhavSachan/FarmiGo/tree/Ambesh",
      source_code_link1:"https://farmigo-final-submition.de.r.appspot.com/",
    },
    {
      name: "YoutubeClone",
      description:
        "Ad-free YouTube clone: Enjoy uninterrupted video playback without ads or the need for signup, offering a seamless streaming experience for all your favorite videos.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidApi",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image:ytclone,
     
      source_code_link: "https://github.com/ambesh333/YoutubeClone",
      source_code_link1:"https://youtubeclone-ambesh.netlify.app/",
    },
    {
      name: "FilmVault",
      description:
        "A comprehensive IMDb clone, providing movie information and ratings, allowing users to explore and discover films with detailed reviews and recommendations.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "moviedbApi",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image:filmvault,
      source_code_link: "https://github.com/ambesh333/quadbtech-project",
      source_code_link1:"https://github.com/ambesh333/quadbtech-project",
    },
  ];
  
  export { services, technologies, experiences, social, projects };