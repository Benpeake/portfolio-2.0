import Project from "./project";
import "./work-section.css";

function WorkSection () {

    const projects = [
        {
            id: 0,
            title: "Colorator",
            img: "../../../images/colorator.png",
            liveLink: "https://colorator-app.vercel.app/",
            github: "https://github.com/Benpeake/colorator-app",
            tech: ["react", "|", "laravel"],
            what: "A colour palette builder for designers. Craft, customise, save, and share palettes. Appreciate and inspire by liking other users' creations.",
            why: "Explore building a full-stack application with users, authentication and the need for innovative UI/UX.",
            how: "React for front-end, Laravel to create a RESTful API managing users, palettes, and likes in a relational MySQL database. Sanctum handles user authentication. Tested with Laravel's phpUnit.",
        },
        {
            id: 1,
            title: "Colecction App",
            img: "../../../images/collection-app.png",
            liveLink: "https://2023-benp.dev.io-academy.uk/collection/index.php",
            github: "https://github.com/Benpeake/collection",
            tech: ["php", "|", "mysql"],
            what: "A simple collection app that allows a user to maintain and show off their record collection.",
            why: "A practical application for learning OOP principles, implementing CRUD operations, and working with a MySQL database using SQL queries.",
            how: "Vanilla PHP and a SQL database, without a framework in order to gain a deeper understanding of the aforementioned topics.",
        },
        {
            id: 2,
            title: "Viridis",
            img: "../../../images/viridis2.png",
            liveLink: "https://benpeake.github.io/viridis-site/",
            github: "https://github.com/Benpeake/viridis-site",
            tech: ["html", "|", "css", "|", "javascript"],
            what: "Website design and build for local landscaping business that needed to convey a large amount of information in a concise and approachable manner.",
            why: "I used this project as an opportunity to explore CSS keyframe animation for creating UI features such as accordions.",
            how: "HTML, CSS and JavaScript, Incorporating GSAP for on-scroll animations.",
        },
    ]

    return (
        <section className="work-section">
            {projects.map((project, index) => (
                <Project
                    key={index} 
                    img={project.img}
                    title={project.title}
                    what={project.what}
                    why={project.why}
                    how={project.how}
                    liveLink={project.liveLink}
                    github={project.github}
                    tech={project.tech}
                />
            ))}
        </section>
    )

}

export default WorkSection