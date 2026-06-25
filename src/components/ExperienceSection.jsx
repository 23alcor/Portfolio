import { Briefcase, FlaskConical } from "lucide-react";

const experiences = [
  {
    role: "Engineering Co-Op, Failure Analysis",
    org: "Consolidated Edison (Con Edison)",
    location: "New York, NY",
    period: "Aug 2025 – Present",
    icon: Briefcase,
    points: [
      "Develop data-processing and classification pipelines in Python, SQL, and Docker to support engineering decision-making on transformer failure analysis.",
      "Query and process large-scale outage datasets with SQL and Python to extract structured features and classify engineering vs. non-engineering incidents.",
      "Containerize data workflows with Docker to standardize model execution and improve reproducibility across engineering teams.",
    ],
  },
  {
    role: "Undergraduate Researcher, Machine Learning",
    org: "Manhattan University",
    location: "Riverdale, NY",
    period: "Feb 2025 – Present",
    icon: FlaskConical,
    points: [
      "Develop end-to-end data pipelines and model-training workflows for Industrial Control System (ICS) datasets using Python and PyTorch.",
      "Build scalable preprocessing pipelines with Python, NumPy, and pandas to clean, filter, and transform large ICS datasets for model training.",
      "Lead a team of undergraduate researchers under faculty mentorship, using Git for version control, culminating in two published research papers.",
      "Ongoing research in HPC and parallel GPU computing to accelerate model training.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Experience & <span className="text-primary">Research</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Where I'm applying software, data, and machine learning to real engineering problems.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, key) => {
            const Icon = exp.icon;
            return (
              <div key={key} className="gradient-border p-6 md:p-8 card-hover text-left">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 w-fit h-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium">
                      {exp.org} <span className="text-muted-foreground font-normal">· {exp.location}</span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
