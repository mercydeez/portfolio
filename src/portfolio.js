/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Atharva Soundankar",
  title: "Hi all, I'm Atharva",
  subTitle: emoji(
    "A dedicated data analyst with a passion for transforming raw data into actionable insights. Continuously evolving and expanding knowledge to grow into a skilled data scientist, driven by learning and innovation."
  ),
  resumeLink: 
   "https://drive.google.com/uc?export=download&id=1fhTttWOzMEV1gZnFCAaiEqicADqDwUof", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mercydeez",
  linkedin: "https://www.linkedin.com/in/atharva-soundankar/",
  medium: "https://medium.com/@atharva3895/",
  instagram: "https://www.instagram.com/atharva_soundankar/",
  twitter: "https://x.com/Atharva3895",
  facebook: "https://www.facebook.com/atharva.soundankar.7/",
  gmail: "atharva3895@gmail.com",
  kaggle:"https://www.kaggle.com/atharvasoundankar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:"A DIGITAL DETECTIVE, SOLVING MYSTERIES ONE DATASET AT A TIME.",
  skills: [
    emoji("⚡ Collect, clean, and preprocess data using Python (Pandas, NumPy)."),
    emoji("⚡ Perform exploratory data analysis (EDA) to uncover hidden patterns."),
    emoji("⚡ Visualize data effectively with Matplotlib, Seaborn, and Power BI."),
    emoji("⚡ Build, train, and evaluate machine learning models with Scikit-Learn."),
    emoji("⚡ Work with SQL databases for querying and managing structured data."),
    emoji("⚡ Deploy and manage data projects using Git, Docker, and AWS.")
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/ico ns?d=gallery */

softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Excel",
    fontAwesomeClassname: "fas fa-file-excel"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-pie"
  },
  {
    skillName: "Pandas",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "NumPy",
    fontAwesomeClassname: "fas fa-square-root-alt"
  },
  {
    skillName: "Matplotlib",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "Seaborn",
    fontAwesomeClassname: "fas fa-palette"
  },
  {
    skillName: "Kaggle",
    fontAwesomeClassname: "fab fa-kaggle"
  },
  {
    skillName: "Git & GitHub",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune  University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Master of Science in Computer Application",
      duration: "September 2023 - July 2025"
    },
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - July 2023",
      desc: "Passed with 'A' Grade"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming & Scripting",
      progressPercentage: "60%"  // Python, SQL, etc.
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "65%"  // Data Analysis, Data Visualization, etc.
    },
    {
      Stack: "Machine Learning & Statistics",
      progressPercentage: "50%"  // Machine Learning (Basics), Statistics, etc.
    },
    {
      Stack: "Leadership & Soft Skills",
      progressPercentage: "70%"  // Leadership, Communication, Problem-solving, etc.
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr.Data Analyst",
      company: "Manasvi Tech Solutions Pvt.Ltd.",
      companylogo: require("./assets/images/manasvi.png"),
      date: "December 2024 – Present",
      desc: "In my role as a Data Analyst, I collected, cleaned, and analyzed data to identify trends and patterns, created reports and dashboards, and provided actionable insights to support business decisions and improve operational efficiency."
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects💡",
  subtitle: "SHOWCASING MY BEST WORK",
  projects: [
    {
      image: require("./assets/images/no_risk.png.png"),
      projectName: "Forest Fire Risk Prediction",
      projectDesc: "A beginner-friendly Machine Learning project that predicts the risk of forest fires based on environmental factors. Built with Streamlit, this project provides real-time predictions and insightful visualizations.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://forest-fire-risk-prediction-d9vmff5zuuvjvgoyjqjvpr.streamlit.app/"
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/mercydeez/forest-fire-risk-prediction"
        }
      ]
    },
    {
      image: require("./assets/images/UPIBI.png"),
      projectName: "UPI Transactions Analysis Dashboard",
      projectDesc: "This Power BI dashboard analyzes UPI transaction trends, payment methods, and regional insights. It provides data-driven insights into UPI growth, helping to understand patterns and improve decision-making in digital payments.",
      footerLink: [
        {
          name: "View Dashboard",
          url: "https://app.powerbi.com/groups/3497fe1f-7ddc-47fb-9bbd-61ef5071b8fa/reports/9150a168-6ce6-4760-afad-4956636faa14?ctid=d0d192ac-6b94-47ea-b38c-5bb83fd8c443&pbi_source=linkShare"
        },
        {
          name: "Github Repository",
          url: "https://github.com/mercydeez/UPI_Dashboard_PowerBI"
        }
      ]
    },
    {
      image: require("./assets/images/MurphyBI.png"),
      projectName: "Insurance Analysis Dashboard",
      projectDesc: "This Power BI dashboard provides insights into Murphy Insurance Pvt. Ltd.'s policy sales, claims, customer demographics, and revenue trends. It helps track key trends, monitor active policies, and make better strategic business decisions with data-driven insights.",
      footerLink: [
        {
          name: "View Dashboard",
          url: "https://app.powerbi.com/groups/me/reports/2c40c8c8-4d2a-4568-8764-8c3940130c99/553669a642656e9f145a?ctid=d0d192ac-6b94-47ea-b38c-5bb83fd8c443&experience=power-bi"
        },
        {
          name: "Github Repository",
          url: "https://github.com/mercydeez/Murphy_Insurance"
        }
      ]
    },
    {
      image: require("./assets/images/google.png"),
      projectName: "Google Play Store Analysis",
      projectDesc: "This project looks at Google Play Store data to find trends in app categories, ratings, installations, and performance. Using Python, Pandas, Seaborn, and Matplotlib, it shows key insights through simple and interactive visualizations.",
      footerLink: [
        {
          name: "Github Respository",
          url: "https://github.com/mercydeez/Google-Play-Analysis"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",


  achievementsCards: [
    {
      title: "Goethe Institute A2 Certification",
      subtitle:
        "Successfully passed the Goethe Institute A2 Exam, demonstrating proficiency in basic German language skills, including reading, writing, listening, and speaking, for everyday communication.",
      image: require("./assets/images/goethe.png"),
      imageAlt: "Goethe Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/19TwlmV_o3cNUJFYVjbYromEMSkZASjqE/view?usp=drive_link"
        }
      ]
    },
    {
      title: "HackerRank SQL Certified",
      subtitle:
        "Earned the HackerRank Basic SQL Certificate, demonstrating proficiency in SQL fundamentals, including querying databases, filtering data, and performing basic joins and aggregations.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "Hackerrank l",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.hackerrank.com/certificates/iframe/55fe6e819027"
        }
      ]
    },
    {
      title: "Research Paper Published: AI Revolution in the Virtual Reality Industry",
      subtitle:
        "Proud to announce that my research paper is officially published in the International Journal of Computer Research & Technology (IJCRT), Vol-10, Issue-1, January-June 2025. This paper dives deep into how Artificial Intelligence is transforming the Virtual Reality industry through AI-driven avatars, enhanced realism, and healthcare simulations.",
      image: require("./assets/images/banner.png"),
      imageAlt: "Research Paper on AI in VR",
      footerLink: [
        {
          name: "View Research Paper",
          url: "https://drive.google.com/file/d/1xk20KhieetT-3ELAabTpBuZrNOR6HiXj/view?usp=drive_link"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1hVYyRinfadoW7OdbZ0QVBBMjI15oUE4x/view?usp=drive_link"
        }
      ]
    }
    
    

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs🖋️",
  subtitle:
    "With love for uncovering insights from data, I love to write and teach others what I have learned.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@atharva3895/chhatrapati-shivaji-maharaj-the-ultimate-strategist-a-lesson-for-data-science-5ddcc18d18de",
      title: "Timeless Leadership Lessons from Chhatrapati Shivaji Maharaj for Data Science & AI",
      description:
        "Explore how the strategic brilliance of Chhatrapati Shivaji Maharaj aligns with key principles in Data Science and AI, from data-driven decision-making to cybersecurity, adaptability, and innovation."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7798884495",
  email_address: "atharva3895@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};