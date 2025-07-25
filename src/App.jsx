import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import Journey from "./components/Journey";
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [showAllAWSSkills, setShowAllAWSSkills] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  const awsSkills = [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Amazon Web Services (AWS)",
    "AWS Solutions Architecture", 
    "AWS EC2 (Elastic Compute Cloud)",
    "Amazon S3 (Simple Storage Service)",
    "IAM (Identity and Access Management)",
    "VPC (Virtual Private Cloud)",
    "AWS Lambda",
    "Amazon RDS (Relational Database Service)",
    "Amazon Route 53",
    "AWS CloudFormation",
    "Elastic Load Balancing (ELB)",
    "Auto Scaling",
    "CloudWatch & CloudTrail",
    "AWS Well-Architected Framework",
    "High Availability and Fault Tolerance in AWS",
    "Security Best Practices on AWS"
  ];

  // Project skills data
  const projectSkills = {
    project1: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
      { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" }
    ],
    project2: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" }
    ],
    project3: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Bcrypt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Multer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
    ],
    project4: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" },
      { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      { name: "Spline", icon: "/spline-icon.png" }
    ]
  };

  const displayedSkills = showAllAWSSkills ? awsSkills : awsSkills.slice(0, 6);

  const toggleProjectSkills = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const getDisplayedProjectSkills = (projectId) => {
    const skills = projectSkills[projectId];
    const isExpanded = expandedProjects[projectId];
    return isExpanded ? skills : skills.slice(0, 5);
  };

  const getRemainingSkillsCount = (projectId) => {
    const skills = projectSkills[projectId];
    return skills.length - 5;
  };

  return (
    <>
      <Header />
      <HeroSection />
      <section id="about" className="min-h-screen flex items-center justify-center bg-[#18192A] text-white px-4 py-12">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-10">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hi, I'm <span className="text-violet-400">Dushyant Singh Rajput</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              I am a Software Engineering student passionate about building impactful solutions. I specialize in developing software that bridges technology and real-world challenges, ensuring efficiency, usability, and meaningful impact.
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              My work spans web development, cloud computing, and backend systems, driven by a belief that technology should solve problems, not create them. I am dedicated to crafting scalable, effective, and user-centric solutions while fostering a culture of collaboration, knowledge-sharing, and continuous improvement.
            </p>
            <div className="border-l-4 border-violet-400 pl-4 my-6">
              <span className="italic text-violet-200 font-medium">
                A Student Fueled By Curiosity, Innovative Ideas And Continuous Learning, Figuring Out Stuff !!
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 w-full">
              <a href={`${import.meta.env.BASE_URL}assets/DushyantSinghRajput_Resume_2025.pdf`}
                target="_blank"
                rel="noopener noreferrer" download className="inline-flex items-center px-6 py-3 rounded-lg bg-violet-500 hover:bg-violet-600 text-white font-semibold shadow transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
                Download Resume
              </a>
              <div className="flex items-center gap-5 mt-2 sm:mt-0 ml-1">
                <a href="https://github.com/DushyantSingh-Rajput0211" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/dushyantsingh-rajput" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                </a>
                <a href="mailto:rajput.dushyantsingh211@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
                </a>
              </div>
            </div>
          </div>
          {/* Right: Profile Photo */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto h-full">
            <img src="./profile.jpg" alt="Dushyant Singh Rajput" className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#23244a] shadow-xl" />
          </div>
        </div>
      </section>

      <Journey />

      <section id="skills" className="min-h-[60vh] flex flex-col items-center justify-center bg-[#18192A] text-white px-4 py-16">
        <h2 className="text-4xl font-bold mb-2 text-center">
          Skills & <span className="text-violet-400">Expertise</span>
        </h2>
        <p className="text-md md:text-lg text-gray-300 mb-10 text-center max-w-2xl">
          Here's a quick overview of my core skills and tools across development, design, and version control.
        </p>
        <div className="max-w-6xl w-full flex flex-col gap-8 justify-center items-stretch">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Frontend Development */}
            <div className="flex-1 bg-[#23244a] rounded-2xl p-8 shadow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {/* Monitor icon */}
                  <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8"/></svg>
                  <h3 className="text-2xl font-bold text-white">Frontend</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-5 h-5 mr-2" />HTML5</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-5 h-5 mr-2" />CSS3</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 mr-2" />JavaScript</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" className="w-5 h-5 mr-2" />ReactJS</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-5 h-5 mr-2" />TypeScript</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-5 h-5 mr-2" />Figma</span>
              </div>
            </div>
            {/* Backend Development */}
            <div className="flex-1 bg-[#23244a] rounded-2xl p-8 shadow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {/* Server icon */}
                  <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="6" rx="2"/><rect x="2" y="14" width="20" height="6" rx="2"/><path d="M6 8h.01M6 18h.01"/></svg>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-5 h-5 mr-2" />Java</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-5 h-5 mr-2" />Spring Framework</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-5 h-5 mr-2" />Spring Boot</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="w-5 h-5 mr-2" />NodeJS</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="ExpressJS" className="w-5 h-5 mr-2 bg-white rounded-full p-0.5" />ExpressJS</span>
              </div>
            </div>
            {/* Databases */}
            <div className="flex-1 bg-[#23244a] rounded-2xl p-8 shadow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {/* Database icon */}
                  <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>
                  <h3 className="text-2xl font-bold text-white">Databases</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-5 h-5 mr-2" />MySQL</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5 mr-2" />MongoDB</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-5 h-5 mr-2" />PostgreSQL</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full mt-8">
            {/* Tools & IDEs */}
            <div className="flex-1 bg-[#23244a] rounded-2xl p-8 shadow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {/* Wrench/Screwdriver icon */}
                  <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-8.4 8.4a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l8.4-8.4z"/><path d="M7 17l-3 3"/></svg>
                  <h3 className="text-2xl font-bold text-white">Tools & IDEs</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-5 h-5 mr-2" />Git</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>                  </svg>
                  GitHub
                </span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-5 h-5 mr-2" />VS Code</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" alt="IntelliJ IDEA" className="w-5 h-5 mr-2" />IntelliJ IDEA</span>
                <span className="flex items-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" alt="Eclipse IDE" className="w-5 h-5 mr-2" />Eclipse</span>
              </div>
            </div>
            {/* AWS (Currently Learning) */}
            <div className="flex-1 bg-[#23244a] rounded-2xl p-8 shadow flex flex-col relative">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {/* Cloud icon */}
                  <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 5.5 5.5 0 0 0-10.9 1.5A4.5 4.5 0 0 0 6.5 19h11z"/></svg>
                  <h3 className="text-2xl font-bold text-white">DevOps & Cloud</h3>
                </div>
              </div>
              <div className="mb-4">
                <span className="bg-violet-600 border border-violet-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Currently Learning</span>
              </div>
              <p className="text-gray-300 mb-6">Deepening expertise in Amazon Web Services and cloud architecture best practices</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {displayedSkills.map((skill, index) => (
                  <span key={index} className="flex items-center justify-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              {!showAllAWSSkills && (
                <button 
                  onClick={() => setShowAllAWSSkills(true)}
                  className="w-full mt-4 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  See More
                </button>
              )}
              {showAllAWSSkills && (
                <button 
                  onClick={() => setShowAllAWSSkills(false)}
                  className="w-full mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  See Less
                </button>
              )}
            </div>
            {/* Product Management */}
            <div className="flex-1 bg-[#23244a] rounded-2xl p-8 shadow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {/* Clipboard/Checklist icon */}
                  <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="4" y="6" width="16" height="16" rx="2"/><path d="M9 10h6M9 14h6"/></svg>
                  <h3 className="text-2xl font-bold text-white">Product Management</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-6">Leading product innovation and development from concept to execution</p>
              <div className="grid grid-cols-2 gap-3">
                <span className="flex items-center justify-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium">Agile</span>
                <span className="flex items-center justify-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium">System Architecture</span>
                <span className="flex items-center justify-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium">UML Designs</span>
                <span className="flex items-center justify-center px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-medium">Design Thinking</span>
              </div>
            </div>
            {/* IoT & Embedded Systems */}
            
          </div>
        </div>
      </section>
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[#18192A] text-white px-4 py-16">
        <h2 className="text-4xl font-bold mb-2 text-center">
          My <span className="text-violet-400">Projects</span>
        </h2>
        <p className="text-md md:text-lg text-gray-300 mb-8 text-center max-w-2xl">
          Explore my portfolio of innovative solutions across various domains and technologies
        </p>
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 text-white font-semibold shadow hover:bg-violet-700 transition">
            {/* Filled pin icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M8.75 2.75a.75.75 0 0 1 1.5 0v2.19l3.72 3.72a2.25 2.25 0 0 1 .66 1.6v.09a2.25 2.25 0 0 1-.66 1.6l-1.13 1.13 2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22-1.13 1.13a2.25 2.25 0 0 1-1.6.66h-.09a2.25 2.25 0 0 1-1.6-.66l-3.72-3.72a.75.75 0 0 1 0-1.06l3.72-3.72V2.75z"/></svg>
            Featured Projects
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#23244a] text-gray-200 font-semibold shadow hover:bg-violet-700 hover:text-white transition">
            {/* Grid/collection icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
            All Projects
          </button>
        </div>
        {/* Projects Grid */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-[#23244a] rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-[#2d2e4d]">
            <div className="flex items-center justify-between mb-2 text-xs text-gray-400">
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>20 Mar 2025</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>680 views</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Ticket Tracker Application – Spring Boot App</h3>
            <p className="text-gray-300 mb-4">A full-stack ticket tracking system to manage and monitor support tickets, with real-time status updates and secure access control.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {getDisplayedProjectSkills("project1").map((skill, index) => (
                <span key={index} className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium">
                  <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                  {skill.name}
                </span>
              ))}
              {!expandedProjects["project1"] && getRemainingSkillsCount("project1") > 0 && (
                <button 
                  onClick={() => toggleProjectSkills("project1")}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium hover:bg-violet-600 hover:text-white transition-colors"
                >
                  +{getRemainingSkillsCount("project1")} more
                </button>
              )}
              {expandedProjects["project1"] && (
                <button 
                  onClick={() => toggleProjectSkills("project1")}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium hover:bg-violet-600 hover:text-white transition-colors"
                >
                  See Less
                </button>
              )}
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/DushyantSingh-Rajput0211/Ticket-Tracker-App" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-semibold hover:bg-violet-600 hover:text-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>Contribute</a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-[#23244a] rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-[#2d2e4d]">
            <div className="flex items-center justify-between mb-2 text-xs text-gray-400">
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>15 Mar 2025</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>410 views</span>
            </div>
            <h3 className="text-xl font-bold mb-2">FBTA – Java App</h3>
            <p className="text-gray-300 mb-4">A full-stack expense-sharing platform supporting group management, user authentication, and real time debt tracking.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {getDisplayedProjectSkills("project2").map((skill, index) => (
                <span key={index} className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium">
                  <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                  {skill.name}
                </span>
              ))}
              {!expandedProjects["project2"] && getRemainingSkillsCount("project2") > 0 && (
                <button 
                  onClick={() => toggleProjectSkills("project2")}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium hover:bg-violet-600 hover:text-white transition-colors"
                >
                  +{getRemainingSkillsCount("project2")} more
                </button>
              )}
              {expandedProjects["project2"] && (
                <button 
                  onClick={() => toggleProjectSkills("project2")}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium hover:bg-violet-600 hover:text-white transition-colors"
                >
                  See Less
                </button>
              )}
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/DushyantSingh-Rajput0211/FBTA" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-semibold hover:bg-violet-600 hover:text-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>Contribute</a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-[#23244a] rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-[#2d2e4d]">
            <div className="flex items-center justify-between mb-2 text-xs text-gray-400">
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>10 Mar 2025</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>590 views</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Simply Rentals – MERN Web Application</h3>
            <p className="text-gray-300 mb-4">A full-featured real estate platform enabling users to list, browse, and manage property rentals with real-time interaction and secure transactions.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {getDisplayedProjectSkills("project3").map((skill, index) => (
                <span key={index} className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium">
                  <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                  {skill.name}
                </span>
              ))}
              {!expandedProjects["project3"] && getRemainingSkillsCount("project3") > 0 && (
                <button 
                  onClick={() => toggleProjectSkills("project3")}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium hover:bg-violet-600 hover:text-white transition-colors"
                >
                  +{getRemainingSkillsCount("project3")} more
                </button>
              )}
              {expandedProjects["project3"] && (
                <button 
                  onClick={() => toggleProjectSkills("project3")}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium hover:bg-violet-600 hover:text-white transition-colors"
                >
                  See Less
                </button>
              )}
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/DushyantSingh-Rajput0211/Simply-Rentals" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-semibold hover:bg-violet-600 hover:text-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>Contribute</a>
              <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-semibold hover:bg-violet-600 hover:text-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>Preview</a>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-[#23244a] rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-[#2d2e4d]">
            <div className="flex items-center justify-between mb-2 text-xs text-gray-400">
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>5 Mar 2025</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>720 views</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Personal Portfolio - Showcasing My Skills & Projects</h3>
            <p className="text-gray-300 mb-4">An interactive and visually appealing portfolio website featuring my skills, projects, and contact details.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {getDisplayedProjectSkills("project4").map((skill, index) => (
                <span key={index} className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium">
                  <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                  {skill.name}
                </span>
              ))}
              {!expandedProjects["project4"] && getRemainingSkillsCount("project4") > 0 && (
                <button 
                  onClick={() => toggleProjectSkills("project4")}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium hover:bg-violet-600 hover:text-white transition-colors"
                >
                  +{getRemainingSkillsCount("project4")} more
                </button>
              )}
              {expandedProjects["project4"] && (
                <button 
                  onClick={() => toggleProjectSkills("project4")}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg border border-violet-500 text-violet-200 text-xs font-medium hover:bg-violet-600 hover:text-white transition-colors"
                >
                  See Less
                </button>
              )}
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-semibold hover:bg-violet-600 hover:text-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>Contribute</a>
              <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-violet-500 text-violet-200 font-semibold hover:bg-violet-600 hover:text-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>Preview</a>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-[#18192A] text-white px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-4xl w-full flex flex-col gap-10">
          {/* Experience 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 60, 180, 0.25)' }}
            whileFocus={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 60, 180, 0.25)' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col md:flex-row items-start gap-6 bg-[#23244a] rounded-2xl shadow-lg p-8 border-l-4 border-violet-500 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400"
            tabIndex={0}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-violet-200 group-hover:border-violet-400 transition-all duration-300">
              <img src="https://media.licdn.com/dms/image/v2/C560BAQEI822KQwnTWQ/company-logo_200_200/company-logo_200_200/0/1630649300534/mundoprints_logo?e=2147483647&v=beta&t=CaIM6me0taFW-Z6BLUNcA8L8yWCYOzPkBB3KQUgE5GU" alt="MUNDOprints Corp." className="w-14 h-14 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">Full Stack & AI Programming Intern</h3>
                  <span className="text-violet-400 font-semibold">MUNDOprints Corp.</span>
                  <span className="text-gray-400 ml-2">Boston, MA</span>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">Feb 2025 – Apr 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                <li>Redesigned and migrated a live eCommerce website from WordPress and WooCommerce to a scalable, high-performance site using React and Tailwind CSS for improved speed and maintainability.</li>
                <li>Integrated secure online payments by implementing the Razorpay API and deploying backend services on AWS.</li>
                <li>Developed a Python automation script to streamline testing and significantly reduce setup time during the new site's deployment phase.</li>
              </ul>
            </div>
          </motion.div>
          {/* Experience 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 60, 180, 0.25)' }}
            whileFocus={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 60, 180, 0.25)' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col md:flex-row items-start gap-6 bg-[#23244a] rounded-2xl shadow-lg p-8 border-l-4 border-violet-500 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400"
            tabIndex={0}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-violet-200 group-hover:border-violet-400 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/en/d/d1/Eicher_Logo.svg" alt="VE Commercial Vehicles Ltd." className="w-14 h-14 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">Deputy Manager – Manufacturing Operations</h3>
                  <span className="text-violet-400 font-semibold">VE Commercial Vehicles Ltd.</span>
                  <span className="text-gray-400 ml-2">Madhya Pradesh, India</span>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">Jul 2012 – Aug 2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                <li>Collaborated with a cross-functional team to develop a real-time product status application using HTML, CSS, React, and TypeScript.</li>
                <li>Enhanced departmental productivity by 14.3% through critical process analysis and optimization of the robotic welding path.</li>
                <li>Redesigned copper adapters for robotic welding, reducing operational downtime by 720 minutes annually and slashing operational costs by INR 1.32 million per year.</li>
              </ul>
            </div>
          </motion.div>
          {/* Experience 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 60, 180, 0.25)' }}
            whileFocus={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 60, 180, 0.25)' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col md:flex-row items-start gap-6 bg-[#23244a] rounded-2xl shadow-lg p-8 border-l-4 border-violet-500 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400"
            tabIndex={0}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-violet-200 group-hover:border-violet-400 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Force_Motors_Logo.svg" alt="Force Motors Ltd." className="w-14 h-14 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">Engineer (Operations)</h3>
                  <span className="text-violet-400 font-semibold">Force Motors Ltd.</span>
                  <span className="text-gray-400 ml-2">Madhya Pradesh, India</span>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">Jun 2010 – Jul 2012</span>
              </div>
              <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                <li>Improved daily production efficiency by 12% by proactively monitoring Body Shop welding and sub-assembly lines.</li>
                <li>Reduced unplanned downtime by 15% by collaborating with maintenance teams and assisting in root cause analysis.</li>
                <li>Streamlined documentation and process compliance by updating shift logs and work instructions, while actively contributing to 5S and Kaizen initiatives.</li>
              </ul>
            </div>
          </motion.div>
          {/* Experience 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 60, 180, 0.25)' }}
            whileFocus={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 60, 180, 0.25)' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col md:flex-row items-start gap-6 bg-[#23244a] rounded-2xl shadow-lg p-8 border-l-4 border-violet-500 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400"
            tabIndex={0}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-violet-200 group-hover:border-violet-400 transition-all duration-300">
              <img src="https://media.licdn.com/dms/image/v2/C4D0BAQEhmCJlnsnZxA/company-logo_200_200/company-logo_200_200/0/1675559938883?e=2147483647&v=beta&t=9aHGuEegGRBUCYvTq4oN7BXjSTmxJeG1SV9JurPp394" alt="SafeFlex International Ltd." className="w-14 h-14 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">Marketing Executive</h3>
                  <span className="text-violet-400 font-semibold">SafeFlex International Ltd.</span>
                  <span className="text-gray-400 ml-2">Madhya Pradesh, India</span>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">Nov 2009 – Jun 2010</span>
              </div>
              <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                <li>Boosted lead conversion efficiency by 20% by assisting in the execution of targeted sales campaigns and managing follow-ups across phone, email, and in-person channels.</li>
                <li>Enhanced client engagement and data accuracy by maintaining CRM systems, coordinating distributor communications, and preparing tailored sales proposals and catalogs.</li>
                <li>Identified new market opportunities and improved digital outreach by conducting competitor analysis and collaborating with the design team on social media and email marketing content.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#23244a] to-[#18192A] text-white px-4 py-12">
        <h2 className="text-4xl font-bold mb-4 text-center">Get in <span className="text-violet-400">Touch</span></h2>
        <p className="text-md md:text-lg text-gray-300 mb-8 text-center max-w-2xl">Have a question or want to work together? I'd love to hear from you.</p>
        <div className="max-w-2xl w-full flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Connect with Me (Left) */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-violet-400">Connect with Me</h3>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/dushyantsingh-rajput" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href="mailto:rajput.dushyantsingh211@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
              </a>
            </div>
            <span className="text-lg font-semibold mb-2 text-violet-300">Connect with Me</span>
            <p className="text-gray-300">Follow me on social media or send me an email.</p>
          </div>
          {/* Contact Form (Right) */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-violet-400 mb-4">Name</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white" />
              <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white" />
              <input type="text" placeholder="What's this about?" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white" />
              <textarea rows="4" placeholder="Your message..." className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white" />
              <button type="submit" className="w-full px-4 py-2 bg-violet-400 hover:bg-violet-500 transition-all duration-300 rounded-lg shadow-md font-bold text-white">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <CustomCursor />
      {/* Footer */}
      <footer className="w-full bg-[#18192A] text-gray-400 py-6 flex flex-col items-center justify-center border-t border-[#23244a] mt-8">
        <div className="flex items-center gap-3 mb-2">
          <a href="https://github.com/DushyantSingh-Rajput0211" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/dushyantsingh-rajput" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </a>
        </div>
        <div className="text-sm text-center">
          © {new Date().getFullYear()} Dushyant Singh Rajput. Built with React & <span className="text-violet-400">♥</span>.
        </div>
      </footer>
    </>
  )
}