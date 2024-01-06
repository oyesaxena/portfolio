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
      Experienced React Native developer with a solid two-year tenure at a prominent health tech company, where I've successfully led a dynamic team of 4-5. A proud graduate of SRM IST, my passion for programming extends beyond mobile development, encompassing robust skills in JavaScript and backend technologies.
      </p>

      <p>
        <span className="italic">Beyond code, I'm a sports enthusiast, enjoying football and badminton, while music serves as my creative outlet. With proficiency in both frontend and backend, I bring a holistic approach to project development. Eager for new challenges, I'm ready to contribute to cutting-edge projects. Explore my portfolio for a snapshot of my diverse skills and journey.</span>.
      </p>
    </motion.section>
  );
}
