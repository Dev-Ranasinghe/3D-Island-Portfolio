import { nchs, sbc, iit } from "../assets/images";
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
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // }
];