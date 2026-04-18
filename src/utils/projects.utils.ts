import { PropsProjectsInfo } from "../interfaces/projects.types";

export const projectsInfo: PropsProjectsInfo[] = [
    {
        img: `/projects/xalapaMovil/cover.png`,
        title: 'Xalapa Móvil',
        date: 'Nov 2025 — Jan 2026',
        desc: ["Built a mobile app for the Xalapa City Council to enhance citizen interaction", "Implemented features for submitting proposals, accessing services, and viewing local news", "Centralized communication between residents and government entities", "Improved accessibility and engagement with municipal services"],
        problem: "Government needed a cross-platform mobile application to gather citizen proposals for city improvements and to expand the reach of website's services",
        solution: 'Designed and developed a mobile application ready for running on Android and iOS',
        key_decisions: 'Chose figma for wireframing screens and feature-based project architecture guaranteeing scalability over time',
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'expo', 'react:react native', 'zustand', 'typescript', 'tailwind', 'pnpm', 'github', 'android:android studio', 'apple:xcode'],
        code_url: '',
        demo_url: ''
    },
    {
        img: `/projects/signsModule/cover.webp`,
        title: 'Digital Signature',
        date: ' Feb 2025 — Present',
        desc: ["Built a digital signature module for a clinical administrative system", "Automated mass report generation for government compliance and validation", "Reduced manual processing time and improved operational efficiency", "Integrated doctor signatures directly into medical notes to streamline care workflows", "Improved data integrity and ensured regulatory compliance"],
        problem: "Managers were spending almost 1/3 of their working time manually signing and medical consultations were overlapping",
        solution: "Created a sub-module for HR system capturing employee's digital signature increasing productivity up to 90%",
        key_decisions: 'Picked a symmetrical aes-256-cbc encrypt algorithm for keeping sensitive data safe and prevent stream manipulation',
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'docker', 'react', 'mui', 'typescript', 'express', 'eslint', 'prettier', 'socketio', 'prisma-ORM:prisma ORM', 'mysql', 'canvas', 'npm', 'gitlab', 'markdown'],
        code_url: '',
        demo_url: ''
    },
    {
        img: `/projects/personalWebsite/cover.webp`,
        title: 'Personal Website',
        date: 'Jan 2025 — Present',
        desc: ["Built a personal portfolio platform to present my software engineering work", "Created a cohesive experience combining technical and creative disciplines", "Emphasized performance, responsive design, and modern UI/UX practices"],
        problem: 'There were no personal website for showcasing my professional path as software engineer, limitating growth and global presence',
        solution: 'Developed a responsive website with optimized SEO and performance, based on trend designs',
        key_decisions: 'As we currently are going through an AI era, I wanted to reflect this through a futuristic design using emerging technologies such as Next.js and GSAP',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: true }
        ],
        icons: ['nodejs', 'vite', 'react', 'router-DOM:router DOM', 'mui', 'motion:framer motion', 'typescript', 'php', 'yarn', 'github', 'pages', 'cloudflare', 'railway'],
        code_url: 'https://github.com/PressureDraper/pressuredraper-website',
        demo_url: 'https://pressuredraper.github.io/pressuredraper-website/#/'
    },
    {
        img: `/projects/hresourcesSystem/cover.webp`,
        title: 'Human Resources System',
        date: 'Apr 2024 — Present',
        desc: ["Engineered a microservice for an administrative clinical platform to manage HR operations", "Implemented modules for attendance, incidents, permissions, vacations, and holidays", "Designed a modular architecture with dedicated sub-modules for each HR function", "Enhanced HR efficiency by centralizing and streamlining employee data management"],
        problem: "Legacy HR system wasn't covering all current needs for incoming policies resulting in heavy workload",
        solution: 'Gathered all requirements for making an intuitive system that boosted operational efficency',
        key_decisions: 'Adopted a modular architecture to accommodate future policy changes and prioritized usability to ensure quick adoption',
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'docker', 'react', 'redux', 'mui', 'typescript', 'express', 'eslint', 'prettier', 'prisma-ORM:prisma ORM', 'mysql', 'npm', 'gitlab', 'markdown'],
        code_url: '',
        demo_url: ''

    },
    /* {
        img: `/projects/medicalCongressv2/cover.webp`,
        title: 'Medical Congress Landing Page v2.0.0',
        date: 'Sep 2024 — Present',
        desc: 'Website developed for hosting the medical congress since 2024, remodeling UI/UX design as well as implementing new features for assistance registration and assistants data display over an admin view. Event carried out every year by the High Specialty Medical Center Dr. Rafael Lucio.',
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: true }
        ],
        icons: ['nodejs', 'react', 'redux', 'router-DOM:router DOM', 'mui', 'html', 'css', 'typescript', 'python', 'canvas', 'express', 'prisma-ORM:prisma ORM', 'mysql', 'aws', 'github', 'pages', 'squarespace', 'smtp', 'yarn', 'markdown'],
        code_url: 'https://github.com/JornadasMedicas?tab=repositories',
        demo_url: 'https://jornadasmedicascae.com'
    },
    {
        img: `/projects/ticketsApp/cover.webp`,
        title: 'Tickets App',
        date: 'Dec 2023',
        desc: "Web app project created as a bank tickets system under bidirectional communication architecture using Socket.IO to mantain real-time actions.",
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'react', 'ant-design:ant design', 'html', 'css', 'express', 'socketio', 'github', 'yarn'],
        code_url: 'https://github.com/PressureDraper/socket-io-04-tickets',
        demo_url: ''
    },
    {
        img: `/projects/medicalEvaluation/cover.webp`,
        title: 'Resident Medical Evaluation System',
        date: 'Jan 2024 — Present',
        desc: "Full microservice developed as a need of the teaching department for an evaluation system for the medical residents that arrives to the hospital every year to perform their residency.",
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'docker', 'react', 'redux', 'mui', 'typescript', 'express', 'eslint', 'prettier', 'smtp', 'prisma-ORM:prisma ORM', 'mysql', 'npm', 'gitlab', 'markdown'],
        code_url: '',
        demo_url: ''
    },
    {
        img: `/projects/medicalCongressv1/cover.webp`,
        title: 'Medical Congress Landing Page v1.0.0',
        date: 'Oct 2023 — Nov 2023',
        desc: "Simple Single-Page Application created for hosting the medical congress in 2023 by the High Specialty Medical Center Dr. Rafael Lucio. Displaying only information about the scheduled talks and a form for attendaces' record.",
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: true }
        ],
        icons: ['nodejs', 'react', 'router-DOM:router DOM', 'mui', 'html', 'css', 'javascript', 'python', 'canvas', 'firestore', 'aws', 'github', 'pages', 'domains', 'workspace', 'smtp', 'yarn'],
        code_url: 'https://github.com/JornadasMedicas/form',
        demo_url: 'https://jornadasmedicas.github.io/form/#/home'
    },
    {
        img: `/projects/heroesApp/cover.webp`,
        title: 'Heroes App',
        date: 'Nov 2023',
        desc: "Simple informative web page about comic book heroes using local storage items to store login status, last visited page and dark mode options along react context and reducers, public and private route protection for logged and non-logged users and button search field and onkeyDown search.",
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: true }
        ],
        icons: ['nodejs', 'react', 'router-DOM:router DOM', 'local-storage:local storage', 'html', 'css', 'mui', 'javascript', 'github', 'pages', 'yarn'],
        code_url: 'https://github.com/PressureDraper/react-heroesApp',
        demo_url: 'https://pressuredraper.github.io/react-heroesApp/#/login'
    },
    {
        img: `/projects/currencyConverter/cover.webp`,
        title: 'Currency Converter Challenge',
        date: 'March 2023',
        desc: "Project performed for the Oracle Next Education Program. Using the Exchange Rate API from scratch to obtain currency values in real time about the exchange ratio of every currency specified in documentation. A graphic interface was built over javax.swing to provide an intuitive experience.",
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: false }
        ],
        icons: ['java', 'javax-swing:java swing', 'netbeans'],
        code_url: 'https://github.com/PressureDraper/CurrencyConverter-JavaG4',
        demo_url: ''
    },
    {
        img: `/projects/cipherDecoder/cover.webp`,
        title: 'Cipher Challenge',
        date: 'Jan 2023',
        desc: "Project performed for the Oracle Next Education Program where were requested to built a web encryptor - decryptor application under certain rules. ",
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: true }
        ],
        icons: ['bootstrap', 'javascript', 'html', 'jquery', 'css', 'github', 'pages'],
        code_url: 'https://github.com/PressureDraper/Sprint01-ChallengeONE',
        demo_url: 'https://pressuredraper.github.io/Sprint01-ChallengeONE/'
    },
    {
        img: `/projects/mp3GlassPlayer/cover.webp`,
        title: 'MP3 Glass Player',
        date: 'Dec 2022',
        desc: "MP3 web player inspired in a clean glassmorphism trend design.",
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: true }
        ],
        icons: ['bootstrap', 'javascript', 'html', 'jquery', 'css', 'github', 'pages'],
        code_url: 'https://github.com/PressureDraper/mp3-Glass-Player',
        demo_url: 'https://pressuredraper.github.io/mp3-Glass-Player/'
    },
    {
        img: `/projects/lotus/cover.webp`,
        title: 'Lotus Discord Bot',
        date: 'Feb 2022',
        desc: "Lotus is a simple but powerful Discord bot made over Node.js that plays music from Youtube and Spotify immersed into Warframe game thematic. ❤️",
        problem: '',
        solution: '',
        key_decisions: '',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'javascript', 'discord-api:discord api', 'distube', 'aws', 'github', 'npm', 'markdown'],
        code_url: 'https://github.com/PressureDraper/Lotus',
        demo_url: ''
    }, */
]