import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Legendary Motorsports Clone",
    description: "A front-end clone of GTA V’s Legendary Motorsport website built using HTML, CSS, and JavaScript. Features custom vehicle data sourced from in-game screenshots, showcasing skills in responsive UI design, DOM manipulation, and dynamic data rendering without frameworks..",
    image: "/Portfolio/projects/project1.png",
    tags: ["HTML, CSS, Javascript"],
    demoUrl: "https://23alcor.github.io/Legendary-Motorosports-Clone/",
    githubUrl:
      "https://github.com/23alcor/Legendary-Motorosports-Clone?tab=readme-ov-file",
  },
  {
    id: 2,
    title: "Job Board Api",
    description:
      "A full-stack job board web app built with React, Tailwind CSS, Node.js, and PostgreSQL, featuring real-time search, RESTful API integration, and responsive design. Demonstrates proficiency in full-stack development, database design, and deploying modern web applications using GitHub Pages and Render..",
    image: "/Portfolio/projects/project2.png",
    tags: ["Node.js, React, REST API, Postgresql"],
    demoUrl: "https://23alcor.github.io/job-board-project/",
    githubUrl: "https://github.com/23alcor/job-board-project",
  },
  {
    id: 3,
    title: "ToDo App",
    description:
      "A dynamic job board application built with React, featuring real-time job search, API integration, and responsive design. Demonstrates proficiency in component-based architecture, state management with hooks, and modern UI development using Tailwind CSS.",
    image: "/Portfolio/projects/project3.png",
    tags: ["Javascript, React"],
    demoUrl: "https://23alcor.github.io/UniversityToDo/",
    githubUrl: "https://github.com/23alcor/UniversityToDo",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Below are some of the projects I've worked on, showcasing my hands-on
          experience with both hardware and software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLink size={20} />{" "}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <Github size={20} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
          target="_blank"
          href='https://github.com/23alcor?tab=repositories'>
            Check My Github <ArrowRight size={16}/>
          </a>

        </div>
      </div>
    </section>
  );
};
