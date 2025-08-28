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
      "Built AI Agent analysis system with RAG pipeline using AWS Bedrock Claude 3.7 Sonnet and voice embeddings, improving customer insights by 40%. Migrated legacy Pre-Order Service Project App to Next.js with serverless AWS architecture (S3, SQS, RDS, Lambda). Oracle to SQL Server migration. Developed URL shortener service with React dashboard using AWS CDK, Lambda, API Gateway, Cognito with 99% uptime. Built AI signature verification system with RAG architecture using Next.js, AWS Textract, DynamoDB, Llama 3.2 Vision, achieving 86% accuracy.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Present",
  },
  {
    title: "Digital Specialist Engineer | Full Stack Developer",
    location: "Infosys Limited, Chandigarh, Haryana",
    description:
      "Built full-stack order tracking application for Wabtec Corporation using Node.js, React.js, enhancing real-time visibility and inventory control. Designed and developed RESTful APIs using Node.js, Express.js for real-time container tracking, processing 10,000+ daily requests with 99% uptime. Implemented Cerbos RBAC/ABAC authorization in microservices architecture including security incidents by 70%. Optimized frontend performance by 40% using React.js, Material UI, Recoil, achieving 30% faster page loads.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2024",
  },
];

export const projectsData = [
  {
    title: "AI Agent Chat Sentiment Analysis Platform",
    description:
      "Built AI Agent chat sentiment analysis platform with RAG-powered conversational retrieval using AWS Bedrock Claude 3.7 Sonnet and serverless Lambda functions. Developed AI Agent Chat Sentiment Analysis Platform with RAG pipeline using AWS Bedrock, Claude 3.7 Sonnet, Lambda, Next.js. Built production AI Agent verification system with RAG architecture using Next.js, AWS Textract, Next.js, DynamoDB, and Llama 3.2 Vision.",
    tags: ["AWS Bedrock", "Claude 3.7 Sonnet", "Lambda", "Next.js", "RAG", "DynamoDB"],
    imageUrl: Sentiment_analysis,
  },
  {
    title: "Pre-Order Service Project Revamp",
    description:
      "Migrated legacy Windows Forms pre-order system to Next.js with TypeScript, Oracle to SQL Server migration for 60% performance improvement. Built serverless voice processing pipeline using AWS CDK, S3, SQS, ECS, RDS PostgreSQL with event-driven architecture. Developed microservices architecture, RESTful APIs, YAML API, and auto-scaling.",
    tags: ["Next.js", "TypeScript", "AWS CDK", "Microsoft SQL Server", "AWS S3", "AWS SQS", "AWS ECS", "RDS"],
    imageUrl: preorder,
  },
  {
    title: "AWS Serverless URL Shortener",
    description:
      "Developed a scalable URL shortening service using AWS Lambda, API Gateway, Python, TypeScript, CDK. Implemented a stateless website with the CloudFront CDN, and Cognito. Implemented API key-based access, OAuth 2.0 authentication and rate limiting.",
    tags: ["AWS Lambda", "API Gateway", "Python", "TypeScript", "CDK", "CloudFront", "Cognito"],
    imageUrl: url_shortener,
  },
  {
    title: "AI Agent Signature Verification System",
    description:
      "Built production AI Agent verification system with RAG architecture using Next.js, AWS Textract, Bedrock, Llama 3.2 Vision. Implemented RAG-enhanced workflows with Llama 3.2 Vision on AWS Bedrock for signature validation and compliance verification with 86% accuracy.",
    tags: ["Next.js", "AWS Textract", "Bedrock", "Llama 3.2 Vision", "RAG"],
    imageUrl: signature_verifier,
  },
];

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Node.js",
  "React",
  "Next.js",
  "Express.js",
  "Redux",
  "Recoil",
  "MERN Stack",
  "Java",
  "SQL",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "DynamoDB",
  "Vector Databases",
  "DevOps",
  "Docker",
  "Microservices Architecture",
  "RESTful APIs",
  "YAML API",
  "GraphQL",
  "AWS EC2",
  "AWS S3",
  "AWS RDS",
  "AWS Lambda",
  "AWS DynamoDB",
  "AWS CDK",
  "AWS ECS",
  "AWS CloudFront",
  "AWS API Gateway",
  "AWS Bedrock",
  "AWS Textract",
  "Claude 3.7 Sonnet",
  "Llama 3.2 Vision",
  "LLMs",
  "RAG Architecture",
  "AI Agent Development",
  "Material UI",
  "Tailwind CSS",
  "ShadCN",
  "System Design",
  "Data Structures & Algorithms",
  "Agile Methodologies",
  "Problem Solving",
  "HTML",
  "CSS",
  "ORM",
];

export const educationData = [
  {
    title: "Bachelor of Technology in Information Technology",
    location: "Rajkiya Engineering College, Azamgarh",
    description: "Uttar Pradesh",
    icon: React.createElement(LuGraduationCap),
    date: "Aug. 2018 - May 2022",
  },
];
