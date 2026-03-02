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
        Senior Backend and Full Stack Engineer with about{" "}
        <span className="font-medium">4 years of experience</span> designing distributed, event-driven, and serverless systems across fintech, supply chain, and AI platforms. Expert in{" "}
        <span className="font-medium">AWS microservices, Stripe payment and billing infrastructure</span>, and building{" "}
        <span className="font-medium">RAG-driven LLM applications</span>. Proven track record of owning production workloads handling{" "}
        <span className="font-medium">1M+ daily events</span>, building highly available architectures, and delivering platforms serving{" "}
        <span className="font-medium">70k+ users</span>.
      </p>

      <p className="mb-3">
        My core tech stack includes{" "}
        <span className="font-medium">JavaScript, TypeScript, Python, Node.js, React.js, Next.js, Express.js, and Nest.js</span>. 
        Expert in{" "}
        <span className="font-medium">Backend Concepts, REST, Event-Driven Design, Distributed Systems, and Serverless Architecture</span>. 
        Extensive experience with AWS services including{" "}
        <span className="font-medium">Lambda, API Gateway, SQS, SNS, RDS, DynamoDB, ECS, Cognito, Textract, and Bedrock</span>. 
        Proficient with databases like{" "}
        <span className="font-medium">PostgreSQL, MongoDB, Elasticsearch, and Redis</span>.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I'm passionate about solving algorithmic problems. 
        I've solved{" "}
        <span className="font-medium">450+ DSA problems</span> across LeetCode, CodeChef (3 Star - 1551 rating), GeeksforGeeks, and HackerRank. 
        I enjoy exploring new technologies, contributing to open-source projects, and staying current with the latest developments in distributed systems and AI.
      </p>
    </motion.section>
  );
}
