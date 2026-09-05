import { FlaskConical, Bot, Users, Cpu } from "lucide-react";
import conEdLogo from "../assets/coned_logo.png";

const workHistory = [
  {
    role: "Summer Researcher — HPC & Parallel GPU Computing",
    org: "Manhattan University Research Group",
    location: "Riverdale, NY",
    period: "May 2025 – Present",
    icon: Cpu,
    points: [
      "Developing a predictive model that uses small-scale GPU profiling (8 GPUs) to forecast distributed training time at larger scales (up to 56 GPUs), achieving 16.4% mean error on architectures never seen during fitting.",
      "Collected 803 measurements across 10 neural network architectures on Bridges-2 (V100s), discovering that exposed communication exhibits two regimes with opposite compute dependence — and that node placement can inflate communication cost by 6.4×.",
      "Tools: PyTorch DDP, NCCL, Slurm, CUDA event timing. Funded under NSF ACCESS allocation CIS261096.",
    ],
  },
  {
    role: "Undergraduate Researcher, Machine Learning",
    org: "Manhattan University",
    location: "Riverdale, NY",
    period: "Feb 2025 – Present",
    icon: FlaskConical,
    points: [
      "Developed end-to-end data pipelines and model-training workflows for Industrial Control System (ICS) datasets using Python and PyTorch.",
      "Built scalable preprocessing pipelines with Python, NumPy, and pandas to clean, filter, and transform large ICS datasets for downstream model training.",
      "Led a team of undergraduate researchers under faculty mentorship, using Git for version control, to refine project design and produce a published research paper.",
    ],
  },
  {
    role: "Engineering Co-Op, Failure Analysis",
    org: "Consolidated Edison (Con Edison)",
    location: "New York, NY",
    period: "Aug 2025 – Present",
    logo: conEdLogo,
    projects: [
      {
        title: "SQL Data Pipeline Rewrite",
        description:
          "Rewrote a decade-old internal data pipeline against a live SQL database, migrating off a deprecated frozen data source and eliminating a silent data-integrity bug that mislabeled records as they aged out.",
      },
      {
        title: "Standalone ML Tool Deployment",
        description:
          "Packaged the internal machine-learning tool into a standalone Windows executable with PyInstaller using a Docker-based build environment, enabling one-click deployment for new co-ops on unconfigured machines.",
      },
      {
        title: "Failure-Classification GUI",
        description:
          "Built a Tkinter GUI front-end so non-technical engineers can run failure-classification workflows point-and-click, without the command line.",
      },
      {
        title: "Photo Report Generator",
        description:
          "A tool that ingests field photos of a transformer, lets the user label and caption each image, and formats them into an industry-standard appendix for equipment reports \u2014 replacing manual image formatting with consistent, repeatable output.",
      },
      {
        title: "Return-to-Service Report Generator",
        description:
          "Auto-populates a standardized report template with a unit's data for transformers cleared to return to service, turning manual data entry and formatting into a one-pass generated document.",
      },
    ],
  },
];

const activities = [
  {
    role: "AI Team — NYSID CREATE Assistive Technology Competition",
    org: "Robotics Club, Manhattan University",
    location: "Riverdale, NY",
    icon: Bot,
    points: [
      "Developed a real-time AI system to help assist a disabled employee with dish-return workloads as part of the team's competition entry.",
    ],
  },
  {
    role: "Co-Founder",
    org: "Asian Student Association, Manhattan University",
    location: "Riverdale, NY",
    icon: Users,
    points: [
      "Co-founded a club open to students of any background to celebrate Asian culture and media.",
      "Managed communications with members through email, meetings, and event announcements.",
    ],
  },
];

const ExperienceCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="gradient-border p-6 md:p-8 card-hover text-left">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div
          className={`rounded-full flex items-center justify-center flex-shrink-0 ${
            item.logo ? "h-12 w-12 bg-white" : "p-3 w-fit h-fit bg-primary/10"
          }`}
        >
          {item.logo ? (
            <img src={item.logo} alt={`${item.org} logo`} className="h-7 w-7 object-contain" />
          ) : (
            <Icon className="h-6 w-6 text-primary" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
            <h3 className="text-xl font-semibold">{item.role}</h3>
            {item.period && (
              <span className="text-sm text-muted-foreground">{item.period}</span>
            )}
          </div>
          <p className="text-primary font-medium">
            {item.org}{" "}
            <span className="text-muted-foreground font-normal">· {item.location}</span>
          </p>
          {item.projects ? (
            <div className="mt-4 space-y-4">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Projects shipped to the team
              </h4>
              {item.projects.map((proj, i) => (
                <div key={i}>
                  <h4 className="font-medium">{proj.title}</h4>
                  <p className="text-muted-foreground">{proj.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-4 space-y-2">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Where I'm applying software, data, and machine learning to real engineering problems.
        </p>

        <div className="space-y-8">
          {workHistory.map((item, key) => (
            <ExperienceCard key={key} item={item} />
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-center">
          Leadership & <span className="text-primary">Activities</span>
        </h3>

        <div className="space-y-8">
          {activities.map((item, key) => (
            <ExperienceCard key={key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
