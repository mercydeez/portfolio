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
    "Data Analyst & AI Practitioner with expertise in Python, SQL, Power BI, and ML. I turn raw data into actionable insights and build scalable, end-to-end AI solutions that automate processes and solve real business challenges."),
  resumeLink: 
   "https://drive.google.com/file/d/1BpRqrxAIG7yWJ7Av0qY5q5kFB3fYgty2/view?usp=sharing", // Set to empty to hide the button
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
    emoji("⚡ Work with big data technologies like Apache Spark and Hadoop."),
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
    skillName: "Kaggle",
    fontAwesomeClassname: "fab fa-kaggle"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Google Cloud (GCP)",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "Microsoft Azure",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "HackerRank",
    fontAwesomeClassname: "fab fa-hackerrank" // Alternative since MongoDB has no FA icon
  },
  {
    skillName: "Snowflake",
    fontAwesomeClassname:"fas fa-snowflake" // Custom SVG for Snowflake
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "S P Jain School of Global Management ",
      logo: require("./assets/images/spj.png"),
      subHeader: "Master of Artificial Intelligence In Business",
      duration: "September 2025 - September 2027",
      desc: "Admitted"
    },
    {
      schoolName: "Savitribai Phule Pune  University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Master of Science in Computer Application",
      duration: "September 2023 - July 2025",
       desc: "Passed with 'A+' Grade"
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
      date: "December 2024 – July 2025",
      desc: "In my role as a Data Analyst, I collected, cleaned, and analyzed data to identify trends and patterns, created reports and dashboards, and provided actionable insights to support business decisions and improve operational efficiency."
    },
    {
      role: "Founder & CEO",
      company: "CodeTriumph Technologies",
      companylogo: require("./assets/images/code_triumph.png"),
      date: "February 2025 – June 2025",
      desc: "In my role as the Founder & CEO, I lead the company's vision and strategy, overseeing all operations and ensuring the delivery of high-quality solutions to our clients."
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
      image: require("./assets/images/lung.png"),
      projectName: "Lung Cancer Risk Prediction App",
      projectDesc: "The Lung Cancer Risk Prediction App is a Streamlit-based ML web app that predicts lung cancer risk from user symptoms using a Random Forest model. Built for learning and demo purposes, it features real-time prediction, a clean UI, and visual insights, all powered by Python and scikit-learn.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://mercydeez-lung-cancer-predictor-app-cc7nc0.streamlit.app/"
        },
        {
          name: "Github Repository",
          url: "https://github.com/mercydeez/lung_cancer_predictor"
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
      title: "Cloud Data Analytics Certificate",
      subtitle:
        "Completed a certificate program focused on cloud-based data analytics, including SQL, data cleaning, visualization, and business intelligence. Developed skills to analyze and present data insights for roles like cloud data analyst and cloud operations analyst.",
      image: require("./assets/images/google-cloud-data-analytics-certificate.png"),
      imageAlt: "Hackerrank l",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/1b182445-2b1c-4b40-8dc4-467fe4ba4433/public_url"
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
      title: "Hands On Essentials - Data Warehouse",
      subtitle:
        "Completed a transformative workshop on Snowflake, covering identity/access management, data container management, ETL, and semi-structured data. Ready to apply these skills in future projects.",
      image: require("./assets/images/DWW.png"),
      imageAlt: "Research Paper on AI in VR",
      footerLink: [
        {
          name: "Certificate",
          url: "https://achieve.snowflake.com/4dce4d1a-5fc0-46a0-89f4-3d1d993d0185#acc.f3hSnZGQ"
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
    {
      url: "https://medium.com/@atharva3895/how-lanka-naresh-ravans-mindset-is-used-in-ai-today-and-its-vision-for-the-future-85fb6731f792",
      title: "How Lanka Naresh Ravan’s Mindset is Used in AI Today — And Its Vision for the Future",
      description:
        "Today, as the world builds Artificial Intelligence (AI), we are, knowingly or unknowingly, adopting the same mindset Ravan lived by — powerful, intelligent, and dangerously capable."
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