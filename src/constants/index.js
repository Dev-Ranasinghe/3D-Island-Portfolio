import { nchs, sbc, iit, arrow2 } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "St. Benedict's College",
        institution: "St. Benedict's College",
        icon: sbc, 
        iconBg: "#d1e6cb",
        date: "Completed",
        points: [
            "Completed GCE Advanced Level in the Biology stream.",
            "Gained a strong foundation in scientific principles and analytical skills.",
        ],
    },
    {
        title: "Nawaloka College of Higher Studies",
        institution: "Nawaloka College of Higher Studies",
        icon: nchs, 
        iconBg: "#f0f1c1",
        date: "Completed 45 Credits",
        points: [
            "Pursued a Computer Science stream under the US Pathway Degree Program.",
            "Completed 45 credits, covering fundamental and advanced topics in computing.",
        ],
    },
    {
        title: "Informatics Institute of Technology",
        institution: "Informatics Institute of Technology",
        icon: iit, 
        iconBg: "#f6cfcf",
        date: "Currently in 2nd Year",
        points: [
            "Pursuing a BSc (Hons) in Computer Science.",
            "Completed 120 credits covering various domains of software development and data science.",
            "Gaining expertise in machine learning, web development, and software engineering.",
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Dev-Ranasinghe',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dev-ranasinghe/',
    }
];

export const projects = [
    {
        iconUrl: arrow2, 
        theme: 'btn-back-blue', 
        name: 'Cloud Storage App',
        description: 'Developed a full-stack cloud storage application using Next.js, ShadCN, and Appwrite. Features include authentication, file uploads (various formats), categorization, sharing, downloading, renaming, and saving files.',
        link: 'https://store-it-dev-drive.vercel.app/', 
    },
    {
        iconUrl: arrow2, 
        theme: 'btn-back-green', 
        name: 'Skillify - Career Guidance',
        description: 'Developed a career guidance platform using Next.js, Flask, LLM, and ML models. Features include dynamic roadmap generation with LLM, salary prediction with ML, an AI chatbot, and CV scanning with job recommendations.',
        link: 'https://skillify.solutions/', 
    },
    {
        iconUrl: arrow2, 
        theme: 'btn-back-green', 
        name: 'AI Interview Prep',
        description: 'Developed an AI-powered interview preparation platform using Next.js and Firebase. Features AI voice assistance with Vapi AI and Gemini API, allowing users to create and participate in mock interviews.',
        link: 'https://interview-prep-by-dev.vercel.app/', 
    },
    {
        iconUrl: arrow2, 
        theme: 'btn-back-blue', 
        name: 'Skillify Marketing Website',
        description: 'Developed a marketing website for the Skillify platform using Next.js. Showcases all features of Skillify along with marketing data, user engagement insights, and promotional content.',
        link: 'https://skillify-web.vercel.app/', 
    },
    {
        iconUrl: arrow2, 
        theme: 'btn-back-blue', 
        name: 'Spotlight Seats',
        description: 'Developed a ticketing system using Angular and Spring Boot, implementing multithreading and the Producer-Consumer pattern. Supports vendors releasing tickets, customers purchasing them, and an admin panel for management.',
        link: 'https://github.com/Dev-Ranasinghe/Spotlight-Seats', 
    },
    {
        iconUrl: arrow2, 
        theme: 'btn-back-green',
        name: '3D Animated Portfolio',
        description: 'Built an interactive 3D portfolio website using Three.js and Next.js. Features an island-themed environment where users can explore and animate elements to showcase my work in an immersive way.',
        link: 'https://dev-interactive-3d-portfolio.vercel.app/', 
    },    
];