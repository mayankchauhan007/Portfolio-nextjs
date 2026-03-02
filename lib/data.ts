import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import masterFflImg from "@/public/masterffl-screenshot.png";
import pmjImg from "@/public/pmj-screenshot.png";
import Sentiment_analysis from "@/public/Sentiment_analysis.png";
import url_shortener from "@/public/url_shortener.png";
import signature_verifier from "@/public/signature_verifier.png";
import insuranceImg from "@/public/Insurance.png";

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
    title: "Software Engineer - Full Stack (Senior Scope)",
    location: "BenthonLabs, Noida, UP, India",
    description:
      "Architected and owned the Stripe subscription and usage-based billing system for the MasterFFL platform (70k+ dealers), designing idempotent webhook orchestration, Setup Intents, and resilient Node.js AWS Lambda services with PostgreSQL. Designed and implemented Elasticsearch-based search and autocomplete functionality for 70k+ dealers, achieving sub-200ms response times at scale. Designed OCR automation pipeline using AWS Textract processing 500+ documents/week with confidence scoring and human validation. Built and operated 10 Lambda microservices on AWS with 95% reliability. Migrated Philip Morris Jezos Japan Platform to AWS Lambda serverless, designing horizontally scalable event-driven workflows handling 1M+ daily messages with 60% cost reduction.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2025 - Present",
  },
  {
    title: "Member of Technical Staff - Backend Developer",
    location: "SMCI Global Securities Ltd (Fintech), New Delhi, India",
    description:
      "Built AI Agent sentiment analysis system with RAG pipeline using AWS Bedrock Claude and vector embeddings, Dynamo db and PostgreSQL processing 10k+ chat interactions. Led modernization of legacy Windows Forms RegTech application to Next.js and nest.js with serverless AWS architecture achieving 60% performance improvement. Developed highly available URL shortener with React dashboard using AWS CDK, Lambda, API Gateway, and DynamoDB handling 50k+ monthly redirects with sub-100ms latency. Engineered AI signature verification solution with Next.js using Textract OCR and Llama Vision achieving 86% validation accuracy.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - October 2025",
  },
  {
    title: "Digital Specialist Engineer - Full Stack Developer",
    location: "Infosys Limited, Chandigarh, India",
    description:
      "Developed full-stack railcar and container tracking application for Wabtec using Node.js, nest.js and React providing real-time visibility across 5k+ assets improving inventory control by 35%. Designed RESTful APIs using Node.js, Express.js for real-time container tracking processing 10k+ daily requests with 99.9% uptime, leveraging Sentry for error monitoring, triage, and alert-driven debugging while integrating services with MongoDB. Implemented Cerbos Role based and attributes based authorization across microservices enabling fine-grained access control reducing security incidents by 75%. Optimized frontend performance by 40% using code splitting, lazy loading, and efficient state management.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2024",
  },
];

export const projectsData = [
  {
    title: "MasterFFL Platform - Stripe Billing System",
    description:
      "Architected and owned the Stripe subscription and usage-based billing system for the MasterFFL platform (70k+ dealers), designing idempotent webhook orchestration, Setup Intents, and resilient Node.js AWS Lambda services with PostgreSQL. Designed and implemented Elasticsearch-based search and autocomplete functionality for 70k+ dealers, achieving sub-200ms response times at scale. Designed OCR automation pipeline using AWS Textract processing 500+ documents/week with confidence scoring and human validation. Built and operated 10 Lambda microservices on AWS with 95% reliability.",
    tags: ["Stripe", "Node.js", "AWS Lambda", "PostgreSQL", "Elasticsearch", "AWS Textract", "Webhook Orchestration", "Microservices"],
    imageUrl: masterFflImg,
  },
  {
    title: "Philip Morris Jezos Japan Platform Migration",
    description:
      "Migrated Philip Morris Jezos Japan Platform to AWS Lambda serverless, designing horizontally scalable event-driven workflows handling 1M+ daily messages with 60% cost reduction. Implemented rate limiting and multi-level Redis caching for Crozoid APIs achieving 70% hit rate. Built CI/CD pipeline for PMJ application using AWS CodeBuild and CodePipeline enabling automated build and deployments.",
    tags: ["AWS Lambda", "Event-Driven Architecture", "Redis", "AWS CodeBuild", "CodePipeline", "Node.js", "Serverless"],
    imageUrl: pmjImg,
  },
  {
    title: "AI Agent Chat Sentiment Analysis Platform",
    description:
      "Built AI Agent sentiment analysis system with RAG pipeline using AWS Bedrock Claude and vector embeddings, processing 10k+ chat interactions. Implemented RAG-powered conversational retrieval using AWS Bedrock Claude and serverless Lambda functions. Achieved significant improvement in customer insights through sentiment analysis.",
    tags: ["AWS Bedrock", "Claude", "RAG", "Lambda", "Vector Databases", "DynamoDB", "PostgreSQL"],
    imageUrl: Sentiment_analysis,
  },
  {
    title: "AI Signature Verification System",
    description:
      "Engineered AI signature verification solution with Next.js using AWS Textract OCR and Llama Vision achieving 86% validation accuracy. Built production system with confidence scoring and human validation workflows for compliance verification. Processes 500+ documents weekly with automated validation.",
    tags: ["Next.js", "AWS Textract", "Llama Vision", "OCR", "AI/ML"],
    imageUrl: signature_verifier,
  },
  {
    title: "Highly Available URL Shortener",
    description:
      "Developed highly available URL shortener with React dashboard using AWS CDK, Lambda, API Gateway, and DynamoDB handling 50k+ monthly redirects with sub-100ms latency. Implemented Cognito JWT authentication and role-based authorization enabling secure integrations, real-time tracking, and reliable webhook orchestration.",
    tags: ["React", "AWS CDK", "Lambda", "API Gateway", "DynamoDB", "Cognito", "TypeScript"],
    imageUrl: url_shortener,
  },
];

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Node.js",
  "React.js",
  "Next.js",
  "Express.js",
  "Nest.js",
  "Redux",
  "Backend Concepts",
  "REST",
  "Event-Driven Design",
  "Distributed Systems",
  "Serverless Architecture",
  "Microservices",
  "Lambda",
  "API Gateway",
  "SQS",
  "SNS",
  "RDS",
  "DynamoDB",
  "ECS",
  "Cognito",
  "Textract",
  "Bedrock",
  "CDR",
  "PostgreSQL",
  "MongoDB",
  "DynamoDB",
  "Elasticsearch",
  "Redis",
  "Sequelize",
  "Mongoose",
  "Sentry",
  "Stripe",
  "Subscriptions",
  "Webhooks",
  "Payment Gateway",
  "Salesforce Marketing Cloud",
  "RAG",
  "LLM Integration",
  "Claude",
  "Llama",
  "Vector Databases",
  "OCR",
  "Docker",
  "Kubernetes",
  "Git",
  "CI/CD",
  "Serverless Framework",
  "CodeBuild",
  "CodePipeline",
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
