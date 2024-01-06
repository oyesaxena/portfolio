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
    title: "BTech from SRM",
    location: "Chennai, India",
    description:
      "I graduated with a dual degree after 4 years of ECE-major and CSE-minor. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "SDE-1",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
