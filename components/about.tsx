"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Picker from 'emoji-picker-react';

export default function About() {
  const { ref } = useSectionInView("About");
 
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A passionate Javascript developer in love with the wonders of React Native, completed my B.Tech from{" "}
        <span className="font-medium">SRM IST</span>, I'm a self learned developer who started falling in love with Google back then in college and later learnt a lot in the world of Competitive programming, Hackathons, Fullstack development and more. 
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and the challenges I face daily, which helps me to keep engineering the product better&better. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem and building architectures of high quality and simplify solutioning for my team as well. 'Yes, I m a team player geek'! My core stack
        is{" "}
        <span className="font-medium">
          React Native, Next.js, Node.js, MongoDB and React.js
        </span>
        . I am also experienced with TypeScript and AWS cloud computing. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">new challenge</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        playing sports like Badminton and football, play ukulele, and hiking around terrains. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">astronomy and it's link with natural physics history.</span>.
      </p>
    </motion.section>
  );
}
