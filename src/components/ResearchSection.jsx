import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
{
    id: 1,
    title: "Adversarially Robust Industrial Control Systems",
    description:
      "Conference paper (IEEE CCWC 2026) — a generative purification pipeline for adversarially robust industrial control systems.",
    image: "/Portfolio/projects/research1.png",
    tags: ["Adversarial ML, Security, ICS, Deep Learning"],
    demoUrl: "REPLACE — paper / IEEE Xplore link",
  },
{
    id: 2,
    title: "HPC & Parallel GPU Computing for ML Training (Ongoing)",
    description:
      "Summer research (Manhattan University) — accelerating machine learning training with HPC and parallel GPU computing. In progress.",
    image: "/Portfolio/projects/research2.png",
    tags: ["HPC, CUDA, GPU, Parallel Computing"],
    demoUrl: "REPLACE — paper link (if available)",
  },
  {
    id: 3,
    title: "Robust Deep Learning in Power Systems (Ongoing)",
    description:
      "Current research with my Manhattan University research group, extending the published conference paper on enhancing deep learning robustness against adversarial attacks in power systems.",
    image: "/Portfolio/projects/research3.png",
    tags: ["Adversarial ML, Power Systems, Robustness, Deep Learning"],
  },


];

export const ResearchSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Research </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Below is some of the research I've worked on, including published and in-progress work.
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
