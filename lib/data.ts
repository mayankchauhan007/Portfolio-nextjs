import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Sentiment_analysis from "@/public/Sentiment_analysis.png";
import url_shortener from "@/public/url_shortener.png";
import signature_verifier from "@/public/signature_verifier.png";
import preorder from "@/public/quality.png";

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
    title: "Member of Technical Staff / Full Stack Developer",
    location: "SMC Global Securities — Fintech, Delhi, India",
    description:
      "Developed sentiment analysis platform leveraging AWS Bedrock (Claude 3 Haiku LLM). Built reliable URL Shortener with admin dashboard using AWS CDK, Lambda, API Gateway, CloudFront, and Cognito. Built Advanced Signature Verification System using Next.js, AWS Textract, ML Model using Siamese Network deployed on AWS SageMaker and DynamoDB.Developed an Insurance Cross-Selling Platform with Next.js 14, TypeScript, AWS DynamoDB, integrating 3rd party APIs for real-time policy and premium calculations.  Revamping a Windows Forms-based Pre-Order Service RegTech App into a Next.js web app while migrating from Oracle SQL to Microsoft SQL Server ",
    icon: React.createElement(LuGraduationCap),
    date: "July 2024 - Present",
  },
  {
    title: "Digital Specialist Engineer / Full Stack Developer",
    location: "Infosys Limited, Chandigarh, Haryana",
    description:
      "Designed a reliable trailer and container tracking system for Wabtec Corporation. Developed RESTful APIs using Node.js and Express.js. Implemented Cerbos for decentralized RBAC and ABAC authorization. Improved frontend performance with React.js, React Router, Axios, and Material UI.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2024",
  },
];

export const projectsData = [
  {
    title: "Chat Sentiment Analysis App",
    description:
      "Developed a full-stack serverless sentiment analysis platform leveraging AWS Bedrock (Claude 3 Haiku) for sentiment, entity, and satisfaction score extraction from conversations.",
    tags: ["React", "Next.js", "AWS Bedrock", "Lambda", "DynamoDB"],
    imageUrl: Sentiment_analysis, // Update with actual image path
  },
  {
    title: "AWS Serverless URL Shortener",
    description:
      "Developed a multi-tenant, scalable URL shortening service using AWS Lambda, API Gateway, Python, TypeScript, CDK. Implemented API key-based access, OAuth 2.0 authentication, rate limiting, and custom domain support.",
    tags: ["AWS Lambda", "API Gateway", "Python", "TypeScript", "CDK"],
    imageUrl: url_shortener, // Update with actual image path
  },
  {
    title: "Signature Verification System",
    description:
      "Built an AI-powered signature verification system using AWS Textract, Next.js, and DynamoDB. Integrated a Siamese Neural Network model on AWS SageMaker for accurate signature matching.",
    tags: ["Next.js", "AWS Textract", "DynamoDB", "SageMaker"],
    imageUrl: signature_verifier, // Update with actual image path
  },
  {
    title: "Pre-Order Service Project Revamp",
    description:
      "Revamped a Windows Forms application into a web-based Next.js app for pre-order management. Migrated database queries from Oracle SQL to Microsoft SQL Server for improved scalability.",
    tags: ["Next.js", "TypeScript", "Microsoft SQL Server"],
    imageUrl: preorder, // Update with actual image path
  },
];

export const skillsData = [
  "Next.js",
  "Node.js",
  "Express",
  "ShadCN",
  "React",
  "Redux",
  "Recoil",
  "JavaScript",
  "TypeScript",
  "AWS EC2",
  "AWS CDK",
  "AWS Lambda",
  "AWS AP I Gateway",
  "AWS Cognito",
  "AWS CloudFront",
  "AWS DynamoDB",
  "AWS S3",
  "OAuth 2.0",
  "JWT",
  "Material UI",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "LLMs",
  "Python",
  "Java",
  "Docker",
  "Git",
  "HTML",
  "CSS",
];
