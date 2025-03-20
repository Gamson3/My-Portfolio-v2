import MovieApp from "../assets/projects/React-Movie-App-image.png";
import PortfolioSite from "../assets/projects/Portfolio-V1-image.png";
import WeatherApp from "../assets/projects/WeatherApp-image.png";


export const Experiences = [
    {
    role: "Freelance Designer & Developer",
    company: "Freelance",
    year: "2022 - Present",
    description: `Designed and developed websites, branding materials, and UI elements to enhance client identity.
    Applied frontend development principles to create engaging and interactive user interfaces.`,
    technologies: ["Adobe Photoshop", "illustrator", "Figma", "Others"]

},{
    role: "Customer Care & Sales Representative ",
    company: "Trucking42, Ukraine",
    year: "Feb 2023 - July 2023",
    description: `Provided technical support for software solutions, improving client satisfaction by resolving issues and 
communicating product benefits effectively. Developing strong communication skills essential for cross-team 
collaboration, enhancing my ability to explain solutions clearly and effectively.`,
    technologies: ["CRM Software", "Excel", "Cross-Team Collaboration", "Technical Communication"]
},{
    role: "Customer Service Specialist",
    company: "Alliance Health, USA",
    year: "July 2021 - Jan 2022 ",
    description: `Assisted clients with over 100+ technical inquiries, enhancing attention to detail, analytical skills and building a 
strong foundation in debugging and problem-solving. While coordinating with health professionals to streamline service delivery and enhance user experience.`,
    technologies: ["CRM Software", "Excel", "Attention to Detail", "Problem Solving"]
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
        description: "First version of my personal portfolio website showcasing my skills and projects. This project demonstrates my proficiency in HTML, CSS, and JavaScript, with a focus on responsive design and user experience.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Gamson3/My-Portfolio-v1",
        live: "https://gamson3.github.io/My-Portfolio-v1/"
    },
    {
        title: "Weatherly",
        image: WeatherApp,
        description: "A responsive weather app using HTML, CSS, and JavaScript with real-time data from the OpenWeatherMap API. Implemented features like a light/dark mode toggle, city-based search, and a modern neumorphic UI for a seamless user experience across devices.",
        technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
        github: "https://github.com/Gamson3/Weatherly",
        live: "https://gamson3.github.io/Weatherly/"
    },
];

