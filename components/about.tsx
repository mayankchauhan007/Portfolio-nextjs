"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
        After graduating with a degree in{" "}
        <span className="font-medium">Information Technology</span>, I worked as a{" "}
        <span className="font-medium">Full Stack Developer</span> at Infosys Limited for 2 years, 
        where I gained experience in designing RESTful APIs and building container shipment tracking systems. 
        I'm currently working at{" "}
        <span className="font-medium">SMC Global Securities</span> as a Member of Technical Staff.
      </p>

      <p className="mb-3">
        My core tech stack includes{" "}
        <span className="font-medium">JavaScript, TypeScript, React, Next.js, Node.js, Express, and AWS</span>.
        I'm passionate about building scalable applications leveraging cloud technologies and 
        have experience with AWS services like Lambda, DynamoDB, API Gateway, and Cognito.
      </p>

      <p>
        <span className="italic">Apart from web development</span>, I enjoy solving algorithmic problems, exploring new technologies, and contributing to open-source projects. I've solved{" "}
        <span className="font-medium">300+ problems</span> on platforms like CodeChef, LeetCode, GFG, and HackerRank. I'm passionate about{" "}
        <span className="font-medium">continuous learning</span> and keeping up with the latest developments in tech.
      </p>
    </motion.section>
  );
}
