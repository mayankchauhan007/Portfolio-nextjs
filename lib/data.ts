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
    title: "Member of Technical Staff | Full Stack Developer",
    location: "SMC Global Securities — Fintech, Delhi, India",
    description:
      "Developed a full-stack sentiment analysis platform integrating LLMs, deployment technologies, sentiment, entity, and satisfaction scores from conversations, importing customer insights by 30%. Deployed a Windows Forms-based Pre-Order Service RegTech App to a Next.js web application, transitioning from Oracle SQL to Microsoft SQL Server while integrating AWS S3, SQS, and RDS for voice recording processing. Implemented Cerbos for decentralized RBAC and ABAC authorization with a microservices architecture, enabling secure, policy-driven access control systems, resulting in a 40% improvement across organizations. Developed an AI-powered Signature Verification System with Next.js, AWS Textract, DynamoDB, and Llama 3.2 Vision model, achieving 80% verification accuracy utilizing Siamese Neural Network and machine learning algorithms.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Present",
  },
  {
    title: "Digital Specialist Engineer | Full Stack Developer",
    location: "Infosys Limited, Chandigarh, Haryana",
    description:
      "Developed to enable taller and container tracking app for Wabtec Corporation, enhancing shipment visibility. Designed and developed RESTful APIs using Node.js and Express.js to support real-time container tracking, processing, over 1000 daily requests with 99% uptime. Implemented Cerbos for decentralized RBAC and ABAC authorization with a microservices architecture, enabling secure, policy-driven access control systems, resulting in a 40% improvement across organizations. Improved frontend performance by 40% and enhanced UX with React.js, React Router, Axios, and Material UI, Recoil, resulting in 30% faster page load times and less rendering.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2024",
  },
];

export const projectsData = [
  {
    title: "Pre-Order Service Project Revamp",
    description:
      "Revamped a legacy Windows Forms pre-order service application into a scalable Next.js web-based order system, migrating the backend from Oracle SQL to Microsoft SQL Server while integrating AWS S3, SQS, ECS, and RDS PostgreSQL. Integrated a voice recording processing module using AWS CDK, S3, SQS, ECS, and RDS PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Microsoft SQL Server", "AWS S3", "AWS SQS", "AWS ECS", "RDS"],
    imageUrl: preorder,
  },
  {
    title: "Chat Sentiment Analysis App",
    description:
      "Developed a full-stack serverless chat sentiment analysis platform leveraging AWS Bedrock (Claude 3 Haiku) for sentiment, entity, and satisfaction score extraction from conversations, implementing customer insights by 30%. Developed a Next.js dashboard for real-time sentiment entity, key phrases, and language analytics visualization.",
    tags: ["React", "Next.js", "AWS Bedrock", "Claude 3 Haiku", "DynamoDB", "Sentiment Analysis"],
    imageUrl: Sentiment_analysis,
  },
  {
    title: "AWS Serverless URL Shortener",
    description:
      "Developed a scalable URL shortening service using AWS Lambda, API Gateway, Python, TypeScript, CDK. Implemented a stateless website with the CloudFront CDN, and Cognito. Implemented API key-based access, OAuth 2.0 authentication and rate limiting.",
    tags: ["AWS Lambda", "API Gateway", "Python", "TypeScript", "CDK", "CloudFront", "Cognito"],
    imageUrl: url_shortener,
  },
  {
    title: "Signature Verification System",
    description:
      "Built an AI-powered signature verification system using AWS Textract, Next.js, and DynamoDB, Llama 3.2 Vision model for signature matching, achieving 80% verification accuracy utilizing Siamese Network and machine learning algorithms.",
    tags: ["Next.js", "AWS Textract", "DynamoDB", "Llama 3.2 Vision", "Siamese Network"],
    imageUrl: signature_verifier,
  },
];

export const skillsData = [
  "Node.js",
  "React",
  "Next.js",
  "Express.js",
  "Redux",
  "Recoil",
  "JavaScript",
  "TypeScript", 
  "Python",
  "Java",
  "SQL",
  "Material UI",
  "Tailwind CSS",
  "ShadCN",
  "MERN Stack",
  "AWS EC2",
  "AWS S3", 
  "AWS RDS",
  "AWS Lambda",
  "AWS DynamoDB",
  "AWS CDK",
  "AWS ECS",
  "AWS CloudFront",
  "AWS API Gateway",
  "Docker",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "DynamoDB",
  "LLMs",
  "AWS Bedrock",
  "Claude 3 Haiku",
  "Llama 3.2 Vision",
  "Data Structures and Algorithms",
  "RESTful APIs",
  "System Design",
  "Microservices",
  "ORM",
  "HTML",
  "CSS",
];
