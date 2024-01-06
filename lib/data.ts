import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BTech",
    location: "SRM,Chennai",
    description:
      "I graduated with a dual degree after 4 years of ECE-major and CSE-minor. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Fullstack Intern",
    location: "Webknot Technologies",
    description:
      "Worked as a fullstack developer intern on MERN stack with AWS and handled 2 clients project.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan,2021 - April,2021",
  },
  {
    title: "SDE-1",
    location: "Bajaj Finserv Health",
    description:
      "My first fulltime role in software development where I started with my journey in Next.js and later React Native",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "SDE-2",
    location: "Bajaj Finserv Health",
    description:
      "Promoted to SDE 2 at Bajaj Health, leading a team of 4 in frontend and handling a squad's end to end tech crons. The squad focuses on health files management and smart reports, includes over 6 journeys in all.", icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title:'ABHA',
    description:"ABHA is a health id for any indian citizen made via mobile number or aadhar card, they can manage health documents, consultations, labs tests, consents, health locker and a lot more via this feature. In addition I also worked to extend this further to Smart reports in Bajaj Health",
    tags:["React Native","Javacript","Node JS","Mongo DB","Azure","Reanimated animations"],
    imageUrl: corpcommentImg,

  }
  ,
  {
    title: "VPurify",
    description:
      "A Mweb app where users can select sanitation slot for their vehicles and select a service station or door service, sanitation workers can update status of assigned vehicle sanitation and same will be reflected on vehicle’s QR code.",
    tags: ["React", "Next.js", "MongoDB", "Material UI", "Figma", "Node JS", "AWS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CrossFarm",
    description:
      "CrossFarm is a web application which allows farmers to sell crops online to large scale vendors without government suppliers intervention. This had an OCR based image processing model on google colab to give price suggestions as per state and crop quality",
    tags: ["React", "TypeScript", "Mongo", "Node JS", "Redux","Colab", "Image Processing","Heroku"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Frontend OCR for PDFs",
    description:
      "A custom model based google ML-KIT text recognition which was patched into a npm package and worked on device itself to give ocr and highlight targetted data on a health document, which can be later edited.",
    tags: ["React Native", "Collab", "ML-KIT", "Flipper",],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "AWS",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Python",
  
] as const;
