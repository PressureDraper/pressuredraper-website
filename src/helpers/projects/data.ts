import { PropsProjectsInfo } from "../../interfaces/projects/IProjectsInfo";

export const projectsInfo: PropsProjectsInfo[] = [
    {
        img: '/pressuredraper-website/projects/signsModule/cover.webp',
        title: 'Digital Signature',
        date: ' Feb 2025 — Present',
        desc: 'Module developed for the Administrative Clinical Integral System platform to allow qualified personal to digitalize their signatures and make way easier the generation of mass reports that must be send to the government every often to validate data.',
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'docker', 'react', 'mui', 'typescript', 'express', 'socketio', 'prisma-ORM', 'mysql', 'canvas', 'npm', 'gitlab', 'markdown'],
        code_url: '',
        demo_url: ''
    },
    {
        img: '/pressuredraper-website/projects/personalWebsite/cover.webp',
        title: 'Personal Website',
        date: 'Jan 2025 — Present',
        desc: 'Personal project created as a portfolio to display all my professional path as a software engineer as well as a music producer as a hobby.',
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: true }
        ],
        icons: ['nodejs', 'vite', 'docker', 'react', 'router-DOM', 'mui', 'motion', 'typescript', 'php', 'yarn', 'github', 'pages', 'railway'],
        code_url: 'https://github.com/PressureDraper/pressuredraper-website',
        demo_url: 'https://pressuredraper.github.io/pressuredraper-website/#/'
    },
    {
        img: '/pressuredraper-website/projects/hresourcesSystem/cover.webp',
        title: 'Human Resources System',
        date: 'Apr 2024 — Present',
        desc: "System application built as a microservice inside the Administrative Clinical Integral System platform as a need of human resources department for displaying employee's attendances, incidences, permissions, vacations and holidays with a sub-module created for every functionality.",
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'docker', 'react', 'redux', 'mui', 'typescript', 'express', 'prisma-ORM', 'mysql', 'npm', 'gitlab', 'markdown'],
        code_url: '',
        demo_url: ''

    },
    {
        img: '/pressuredraper-website/projects/medicalCongressv2/cover.webp',
        title: 'Medical Congress Landing Page v2.0.0',
        date: 'Sep 2024 — Present',
        desc: 'Website developed for hosting the medical congress since 2024, remodeling UI/UX design as well as implementing new features for assistance registration and assistants data display over an admin view. Event carried out every year by the High Specialty Medical Center Dr. Rafael Lucio.',
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: true }
        ],
        icons: ['nodejs', 'react', 'redux', 'router-DOM', 'mui', 'html', 'css', 'typescript', 'python', 'canvas', 'express', 'prisma-ORM', 'mysql', 'aws', 'github', 'pages', 'squarespace', 'smtp', 'yarn', 'markdown' ],
        code_url: 'https://github.com/JornadasMedicas?tab=repositories',
        demo_url: 'https://jornadasmedicascae.com'
    },
    {
        img: '/pressuredraper-website/projects/ticketsApp/cover.webp',
        title: 'Tickets App',
        date: 'Dec 2023',
        desc: "Web app project created as a bank tickets system under bidirectional communication architecture using Socket.IO to mantain real-time actions.",
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'react', 'ant-design', 'html', 'css', 'express', 'socketio', 'github', 'yarn'],
        code_url: 'https://github.com/PressureDraper/socket-io-04-tickets',
        demo_url: ''
    },
    {
        img: '/pressuredraper-website/projects/medicalEvaluation/cover.webp',
        title: 'Resident Medical Evaluation System',
        date: 'Jan 2024 — Present',
        desc: "Full microservice developed as a need of the teaching department for an evaluation system for the medical residents that arrives to the hospital every year to perform their residency.",
        buttons: [
            { name: 'code', active: false },
            { name: 'docs', active: true },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'docker', 'react', 'redux', 'mui', 'typescript', 'express', 'smtp', 'prisma-ORM', 'mysql', 'npm', 'gitlab', 'markdown'],
        code_url: '',
        demo_url: ''
    },
    {
        img: '/pressuredraper-website/projects/medicalCongressv1/cover.webp',
        title: 'Medical Congress Landing Page v1.0.0',
        date: 'Oct 2023 — Nov 2023',
        desc: "Simple Single-Page Application created for hosting the medical congress in 2023 by the High Specialty Medical Center Dr. Rafael Lucio. Displaying only information about the scheduled talks and a form for attendaces' record.",
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: true }
        ],
        icons: ['nodejs', 'react', 'router-DOM', 'mui', 'html', 'css', 'javascript', 'python', 'canvas', 'firestore', 'aws', 'github', 'pages', 'domains', 'workspace', 'smtp', 'yarn' ],
        code_url: 'https://github.com/JornadasMedicas/form',
        demo_url: 'https://jornadasmedicas.github.io/form/#/home'
    },
    {
        img: '/pressuredraper-website/projects/heroesApp/cover.webp',
        title: 'Heroes App',
        date: 'Nov 2023',
        desc: "Simple informative web page about comic book heroes using local storage items to store login status, last visited page and dark mode options along react context and reducers, public and private route protection for logged and non-logged users and button search field and onkeyDown search.",
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: true }
        ],
        icons: ['nodejs', 'react', 'router-DOM', 'local-storage', 'html', 'css', 'mui', 'javascript', 'github', 'pages', 'yarn'],
        code_url: 'https://github.com/PressureDraper/react-heroesApp',
        demo_url: 'https://pressuredraper.github.io/react-heroesApp/#/login'
    },
    {
        img: '/pressuredraper-website/projects/currencyConverter/cover.webp',
        title: 'Currency Converter Challenge',
        date: 'March 2023',
        desc: "Project performed for the Oracle Next Education Program. Using the Exchange Rate API from scratch to obtain currency values in real time about the exchange ratio of every currency specified in documentation. A graphic interface was built over javax.swing to provide an intuitive experience.",
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: false }
        ],
        icons: ['java', 'javax-swing', 'netbeans'],
        code_url: 'https://github.com/PressureDraper/CurrencyConverter-JavaG4',
        demo_url: ''
    },
    {
        img: '/pressuredraper-website/projects/cipherDecoder/cover.webp',
        title: 'Cipher Challenge',
        date: 'Jan 2023',
        desc: "Project performed for the Oracle Next Education Program where were requested to built a web encryptor - decryptor application under certain rules. ",
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
        img: '/pressuredraper-website/projects/mp3GlassPlayer/cover.webp',
        title: 'MP3 Glass Player',
        date: 'Dec 2022',
        desc: "MP3 web player inspired in a clean glassmorphism trend design.",
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
        img: '/pressuredraper-website/projects/lotus/cover.webp',
        title: 'Lotus Discord Bot',
        date: 'Feb 2022',
        desc: "Lotus is a simple but powerful Discord bot made over Node.js that plays music from Youtube and Spotify immersed into Warframe game thematic. ❤️",
        buttons: [
            { name: 'code', active: true },
            { name: 'docs', active: false },
            { name: 'demo', active: false }
        ],
        icons: ['nodejs', 'javascript', 'discord-api', 'distube', 'aws', 'github', 'npm', 'markdown'],
        code_url: 'https://github.com/PressureDraper/Lotus',
        demo_url: ''
    },
]