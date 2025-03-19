import MovieApp from "../assets/projects/React-Movie-App-image.png";
import PortfolioSite from "../assets/projects/Portfolio-V1-image.png";
import WeatherApp from "../assets/projects/WeatherApp-image.png";


export const Experiences = [
    {
    role: "Graphics Designer",
    company: "Freelance",
    year: "2022 - Present",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js API's. Implemented responsive designs and optimised for frontend performances.`,
    technologies: ["Adobe Photoshop", "illustrator", "Figma", "Others"]

},{
    role: "Customer Care & Sales Representative ",
    company: "Trucking42, Ukraine",
    year: "Feb 2023 - July 2023",
    description: `Provided technical support for software solutions, improving client satisfaction by resolving issues and 
communicating product benefits effectively. Developing strong communication skills essential for cross-team 
collaboration, enhancing my ability to explain solutions clearly and effectively.`,
    technologies: ["HTML", "CSS", "Vue.js", "MySQL"]
},{
    role: "Customer Service Specialist",
    company: "Alliance Health, USA",
    year: "July 2021 - Jan 2022 ",
    description: `Assisted clients with 100+ technical inquiries, enhancing attention to detail, analytical skills and building a 
strong foundation in debugging and problem-solving. While coordinating with health professionals to ensure 
seamless service`,
    technologies: ["HTML", "CSS", "Vue.js", "MySQL"]
},];


export const Projects = [
    {
        title: "MovieHive",
        image: MovieApp,
        description: "A React-based movie discovery app that allows users to browse popular movies, search for specific titles, and save favourites. Built with Vite, React Router, and The Movie Database (TMDb) API, it provides an intuitive interface for movie lovers.",
        technologies: ["React", "Vite", "CSS", "TMDb API"],
        github: "https://github.com/Gamson3/MovieHive",
        live: "https://gamson3.github.io/MovieHive/"
    },
    {
        title: "Portfolio Website",
        image: PortfolioSite,
        description: "A personal portfolio website showcasing my skills and projects. This project demonstrates my proficiency in HTML, CSS, and JavaScript, with a focus on responsive design and user experience.",
        technologies: ["React", "Tailwind CSS", "Vite"],
        github: "https://github.com/Gamson3/My-Portfolio",
        live: "https://gamson3.github.io/My-Portfolio/"
    },
    {
        title: "Weatherly",
        image: WeatherApp,
        description: "A responsive weather app using HTML, CSS, and JavaScript with real-time data from the OpenWeatherMap API. Implemented features like a light/dark mode toggle, city-based search, and a modern neumorphic UI for a seamless user experience across devices.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Gamson3/Weatherly",
        live: "https://gamson3.github.io/Weatherly/"
    },
];

