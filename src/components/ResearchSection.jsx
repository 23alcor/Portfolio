import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ResearchModal } from "./ResearchModal";

const research = [
  {
    id: 1,
    slug: "adversarial-ics",
    title: "Adversarially Robust Industrial Control Systems",
    description:
      "Conference paper (IEEE CCWC 2026) — a generative purification pipeline for adversarially robust industrial control systems.",
    image: "/projects/research1.png",
    tags: ["Adversarial ML", "Security", "ICS", "Deep Learning"],
    status: "Published",
    affiliation: "IEEE CCWC 2026",
    citation: {
      authors: ["Ralphael Alcober", "Ilian Tyrrell Pangan", "Yi Wang"],
      self: "Ralphael Alcober",
      title:
        "Adversarially Robust Industrial Control Systems Using a Generative Purification Pipeline",
      venue:
        "2026 IEEE 16th Annual Computing and Communication Workshop and Conference (CCWC), University of Nevada, Las Vegas, January 2026.",
    },
    note: [
      {
        heading: "Problem",
        body: "Industrial control systems increasingly lean on learned models to flag anomalies in sensor and network data. Those models inherit a known weakness: an attacker who can nudge inputs by a small, carefully chosen amount can push a reading across the decision boundary while it still looks unremarkable to an operator.",
      },
      {
        heading: "Approach",
        body: "Rather than hardening the classifier itself, the pipeline places a generative purification stage in front of it, reconstructing incoming samples so adversarial perturbation is stripped out before the model sees the input. Because the defense sits upstream of the detector, it does not require retraining the model it protects.",
      },
      {
        heading: "Contribution",
        body: "Evaluated on the Morris ORNL–Mississippi State ICS power distribution dataset against five standard attack families — FGSM, PGD, DeepFool, C&W and JSMA — with the purifier trained as a front end for a detector that is trained once on clean data and then frozen. Any accuracy recovered under attack therefore comes from the preprocessing stage alone, not from retraining the model it protects.",
      },
    ],
    paperUrl: "https://ieeexplore.ieee.org/document/11393828",
    linkNote: "",
  },
  {
    id: 2,
    slug: "hpc-gpu-training",
    title: "HPC & Parallel GPU Computing for ML Training",
    description:
      "Summer research (Manhattan University) — an NSF ACCESS study of where distributed GPU training actually loses time, run on the Bridges-2 supercomputer.",
    image: "/projects/research2.png",
    tags: ["HPC", "CUDA", "GPU", "Parallel Computing"],
    status: "In progress",
    affiliation: "Summer research · Manhattan University · 2026 – present",
    note: [
      {
        heading: "Problem",
        body: "Training time for modern models is bounded less by the algorithm than by how well the work maps onto the hardware underneath it. When multi-GPU training scales badly, the blame almost always lands on communication — but a throughput number cannot tell apart a job that communicates heavily and hides all of it from one that communicates little and hides none. Those two have completely different fixes.",
      },
      {
        heading: "Approach",
        body: "Data-parallel training with PyTorch DDP, measured with a metric I call exposed communication — the share of gradient synchronization that overlap fails to hide. DDP fires each gradient bucket’s all-reduce as soon as that bucket is ready, so most of the transfer costs nothing; it shows up in wall-clock time only when it cannot finish inside the compute window available to hide it. Timing the identical step twice, once with synchronization on and once with it disabled through DDP’s no_sync() context, cancels the overlapped part and leaves exactly the remainder. No profiler, no framework changes, and it correctly returns near zero on a single GPU.",
      },
      {
        heading: "Where it stands",
        body: "Single-GPU compute anchors established first, then the metric applied from 1 to 64 GPUs across up to eight InfiniBand-connected nodes, plus a cross-architecture check on H100. The result driving the paper: adding GPUs is nearly free, while spreading the same GPUs across more nodes is not — holding world size and gradient payload fixed and varying only how the ranks are distributed separates the interconnect from the scale, a confound most end-to-end scaling studies leave in. Every measurement is gated at under 2% run-to-run variance and replicated on distinct physical nodes. Paper in draft, on an NSF ACCESS allocation with Dr. Wafa Elmannai as PI.",
      },
      {
        heading: "Stack",
        body: "PyTorch DistributedDataParallel over NCCL and CUDA, mixed precision, torchrun, and SLURM batch jobs. Hardware is NVIDIA V100-32GB nodes at the Pittsburgh Supercomputing Center (Bridges-2), with H100 nodes on TAMU ACES for the cross-architecture check.",
      },
    ],
    paperUrl: "",
    linkNote: "Work in progress — results will be posted once published.",
  },
  {
    id: 3,
    slug: "robust-power-systems",
    title: "Generalizing to Unseen Adversarial Attacks",
    description:
      "Conference paper (IEEE UEMCON 2026) — a denoising autoencoder purifier for industrial control system intrusion detection, measured against attacks it was never trained on.",
    image: "/projects/research3.png",
    tags: ["Adversarial ML", "Power Systems", "Robustness", "Deep Learning"],
    status: "Accepted",
    affiliation: "IEEE UEMCON 2026 · New York · October 2026",
    citation: {
      authors: [
        "Ralphael Alcober",
        "Ilian Tyrrell Pangan",
        "Vincent Vocal",
        "Yi Wang",
        "Andre Cartagena",
      ],
      self: "Ralphael Alcober",
      title:
        "Generalizing to Unseen Adversarial Attacks in Industrial Control System Intrusion Detection with a Denoising Autoencoder Purifier",
      venue:
        "2026 IEEE Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), New York, October 2026. Accepted for physical presentation; camera-ready in preparation.",
    },
    note: [
      {
        heading: "Problem",
        body: "Intrusion detectors on power distribution networks are learned models, and learned models can be flipped by perturbations too small for an operator to notice. Most purification defenses are evaluated against the same attacks they were trained on, which flatters the result — a real attacker picks the method, and it will not be one from the training set. What decides whether a defense is worth deploying is how it holds against an attack it has never seen.",
      },
      {
        heading: "Approach",
        body: "Keeps the purification idea from the CCWC work — strip the perturbation out of the input before it reaches the model, instead of retraining the model to resist it — but swaps the generative adversarial purifier for a denoising autoencoder and measures generalization directly. Leave one attack out: the purifier trains on four attack families and is evaluated on the fifth, rotating which one is held out, with the detector trained once on clean data and then frozen throughout.",
      },
      {
        heading: "Where it stands",
        body: "Accepted for physical presentation at IEEE UEMCON 2026 in New York this October, with Ilian Pangan, Vincent Vocal, Andre Cartagena and Dr. Yi Wang. Camera-ready is in preparation — results and the IEEE Xplore link will be posted here once the proceedings are published.",
      },
    ],
    paperUrl: "",
    linkNote:
      "Accepted for presentation — the paper will be linked here once it is on IEEE Xplore.",
  },
];

export const ResearchSection = () => {
  const [openId, setOpenId] = useState(null);
  const openEntry = research.find((item) => item.id === openId) ?? null;

  // Deep link support: /Portfolio/?research=hpc-gpu-training opens that note.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("research");
    if (!slug) return;
    const match = research.find((item) => item.slug === slug);
    if (match) setOpenId(match.id);
  }, []);

  const syncUrl = (slug) => {
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("research", slug);
    else url.searchParams.delete("research");
    window.history.replaceState({}, "", url);
  };

  const handleOpen = (item) => {
    setOpenId(item.id);
    syncUrl(item.slug);
  };

  const handleClose = useCallback(() => {
    setOpenId(null);
    syncUrl(null);
  }, []);

  return (
    <section id="research" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Research </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Below is some of the research I've worked on, including published and
          in-progress work. Select any one to read more about it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {research.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleOpen(item)}
              aria-haspopup="dialog"
              className="group block w-full cursor-pointer overflow-hidden rounded-lg bg-card text-left shadow-xs card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {item.status}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {item.paperUrl ? (
                    <>
                      Read the paper <ExternalLink size={14} />
                    </>
                  ) : (
                    <>
                      Read more <ArrowRight size={14} />
                    </>
                  )}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/23alcor?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <ResearchModal entry={openEntry} onClose={handleClose} />
    </section>
  );
};
