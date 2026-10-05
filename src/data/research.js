// Research entries: the single source of truth for the cards in the home page's
// Research section, the /research/<slug>/ pages, and the per-page HTML that
// scripts/research-pages.js writes at build time (titles + link previews).
// Keep this file plain data: no JSX and no imports, so the build step can load it.
//
// Text fields can wrap code in backticks (`no_sync()`); the page renders it as code.

export const SITE_URL = "https://portfolio.berlabs.dev";
export const SITE_TITLE = "Ralphael's Portfolio";
export const AUTHOR = "Ralphael Alcober";

export const research = [
  {
    slug: "adversarial-ics",
    title: "Adversarially Robust Industrial Control Systems",
    description:
      "Conference paper (IEEE CCWC 2026) — a generative purification pipeline for adversarially robust industrial control systems.",
    image: "/projects/research1.png",
    tags: ["Adversarial ML", "Security", "ICS", "Deep Learning"],
    status: "Published",
    affiliation: "IEEE CCWC 2026 · Las Vegas · January 2026",
    figure: {
      src: "/projects/research1-pipeline.png",
      alt: "Pipeline diagram. Clean or attacked industrial-system data passes through a GAN purifier (a generator and a discriminator), then a neural-network classifier that outputs the prediction. An adversarial-attack block — DeepFool, JSMA, FGSM, C&W and PGD — targets the purifier and the classifier.",
      caption:
        "The defense pipeline: every sample, clean or attacked, passes through the GAN purifier before the classifier sees it.",
      fit: "contain",
      width: 1583,
      height: 1029,
    },
    facts: [
      {
        label: "Dataset",
        value: "Morris ORNL–Mississippi State ICS power distribution dataset",
      },
      { label: "Attacks evaluated", value: "FGSM, PGD, DeepFool, C&W, JSMA" },
      {
        label: "Defense",
        value:
          "GAN purifier in front of a detector trained once on clean data, then frozen",
      },
      { label: "Pages", value: "829–835" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Industrial control systems increasingly lean on learned models to flag anomalies in sensor and network data. Those models inherit a known weakness: an attacker who can nudge inputs by a small, carefully chosen amount can push a reading across the decision boundary while it still looks unremarkable to an operator.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Rather than hardening the classifier itself, the pipeline places a generative purification stage in front of it, reconstructing incoming samples so adversarial perturbation is stripped out before the model sees the input. Because the defense sits upstream of the detector, it does not require retraining the model it protects.",
        ],
      },
      {
        heading: "Contribution",
        body: [
          "Evaluated on the Morris ORNL–Mississippi State ICS power distribution dataset against five standard attack families — FGSM, PGD, DeepFool, C&W and JSMA — with the purifier trained as a front end for a detector that is trained once on clean data and then frozen. Any accuracy recovered under attack therefore comes from the preprocessing stage alone, not from retraining the model it protects.",
        ],
      },
    ],
    citation: {
      authors: ["Ralphael Alcober", "Ilian Tyrrell Pangan", "Yi Wang"],
      title:
        "Adversarially Robust Industrial Control Systems Intrusion Detection Using a Generative Purification Pipeline",
      venue:
        "2026 IEEE 16th Annual Computing and Communication Workshop and Conference (CCWC), University of Nevada, Las Vegas, January 2026, pp. 829–835.",
      doi: "10.1109/CCWC67433.2026.11393828",
      bibtex: `@inproceedings{alcober2026adversarially,
  author    = {Alcober, Ralphael and Pangan, Ilian and Wang, Yi},
  title     = {Adversarially Robust Industrial Control Systems Intrusion Detection Using a Generative Purification Pipeline},
  booktitle = {2026 IEEE 16th Annual Computing and Communication Workshop and Conference (CCWC)},
  address   = {Las Vegas, NV, USA},
  year      = {2026},
  pages     = {829--835},
  doi       = {10.1109/CCWC67433.2026.11393828}
}`,
    },
    paperUrl: "https://ieeexplore.ieee.org/document/11393828",
    linkNote: "",
  },
  {
    slug: "hpc-gpu-training",
    title: "HPC & Parallel GPU Computing for ML Training",
    description:
      "Summer research (Manhattan University) — an NSF ACCESS study of where distributed GPU training actually loses time, run on the Bridges-2 supercomputer.",
    image: "/projects/research2.png",
    tags: ["HPC", "CUDA", "GPU", "Parallel Computing"],
    status: "In progress",
    affiliation: "Summer research · Manhattan University · 2026 – present",
    figure: {
      src: "/projects/research2.png",
      alt: "Rows of Bridges-2 supercomputer cabinets in the machine room at the Pittsburgh Supercomputing Center.",
      caption:
        "Bridges-2 at the Pittsburgh Supercomputing Center, home of the V100 nodes these measurements run on.",
      fit: "cover",
      width: 1024,
      height: 576,
    },
    stats: [
      { value: "803", label: "measurements" },
      { value: "10", label: "neural network architectures" },
      { value: "6.4×", label: "communication-cost inflation from node placement" },
      { value: "16.4%", label: "mean forecast error on unseen architectures" },
    ],
    facts: [
      {
        label: "Scale",
        value: "1 to 64 GPUs across up to eight InfiniBand-connected nodes",
      },
      {
        label: "Hardware",
        value: "NVIDIA V100-32GB on Bridges-2 (PSC) · H100 on ACES (TAMU)",
      },
      {
        label: "Allocation",
        value: "NSF ACCESS CIS261096 · PI Dr. Wafa Elmannai",
      },
      { label: "Status", value: "Paper in draft" },
    ],
    sections: [
      {
        heading: "The question",
        body: [
          "Training time for modern models is bounded less by the algorithm than by how well the work maps onto the hardware underneath it. When multi-GPU training scales badly, the blame almost always lands on communication — but a throughput number cannot tell apart a job that communicates heavily and hides all of it from one that communicates little and hides none. Those two have completely different fixes.",
        ],
      },
      {
        heading: "Measuring what overlap hides",
        body: [
          "Data-parallel training with PyTorch DDP, measured with a metric I call exposed communication — the share of gradient synchronization that overlap fails to hide.",
          "DDP fires each gradient bucket’s all-reduce as soon as that bucket is ready, so most of the transfer costs nothing; it shows up in wall-clock time only when it cannot finish inside the compute window available to hide it. Timing the identical step twice, once with synchronization on and once with it disabled through DDP’s `no_sync()` context, cancels the overlapped part and leaves exactly the remainder. No profiler, no framework changes, and it correctly returns near zero on a single GPU.",
        ],
        figure: "exposed-communication",
      },
      {
        heading: "Separating the interconnect from the scale",
        body: [
          "Single-GPU compute anchors came first. The metric was then applied from 1 to 64 GPUs across up to eight InfiniBand-connected nodes, plus a cross-architecture check on H100.",
          "The key control is placement: hold world size and gradient payload fixed and vary only how the ranks are distributed across nodes. That separates the interconnect from the scale — a confound most end-to-end scaling studies leave in.",
        ],
        figure: "placement",
      },
      {
        heading: "What it’s showing so far",
        body: [
          "The result driving the paper: adding GPUs is nearly free, while spreading the same GPUs across more nodes is not.",
          "Across 803 measurements on 10 neural network architectures on Bridges-2’s V100s, exposed communication shows two regimes with opposite compute dependence, and node placement can inflate communication cost by 6.4×.",
          "The project also includes a predictive model: profile a job on 8 GPUs, then forecast its distributed training time at larger scales, up to 56 GPUs. On architectures never seen during fitting, its mean error is 16.4%.",
        ],
      },
      {
        heading: "Measurement discipline",
        body: [
          "Every measurement is gated at under 2% run-to-run variance and replicated on distinct physical nodes, with step times taken from CUDA event timing.",
        ],
      },
      {
        heading: "Stack",
        body: [
          "PyTorch DistributedDataParallel over NCCL and CUDA, mixed precision, torchrun, and SLURM batch jobs. Hardware is NVIDIA V100-32GB nodes at the Pittsburgh Supercomputing Center (Bridges-2), with H100 nodes on TAMU ACES for the cross-architecture check.",
        ],
      },
      {
        heading: "Where it stands",
        body: [
          "Paper in draft, on an NSF ACCESS allocation (CIS261096) with Dr. Wafa Elmannai as PI.",
        ],
      },
    ],
    paperUrl: "",
    linkNote: "Work in progress — the paper will be linked here once it’s published.",
  },
  {
    slug: "unseen-adversarial-attacks",
    // Old slug from when this entry opened in a modal (/?research=robust-power-systems).
    aliases: ["robust-power-systems"],
    title: "Generalizing to Unseen Adversarial Attacks",
    description:
      "Conference paper (IEEE UEMCON 2026) — a denoising autoencoder purifier for industrial control system intrusion detection, measured against attacks it was never trained on.",
    image: "/projects/research3.png",
    // The card thumbnail isn't a figure from this paper, so leave it out of link previews.
    ogImage: null,
    tags: ["Adversarial ML", "Power Systems", "Robustness", "Deep Learning"],
    status: "Accepted",
    affiliation: "IEEE UEMCON 2026 · New York · October 7–9, 2026",
    facts: [
      {
        label: "Defense",
        value:
          "Denoising autoencoder purifier in front of a detector trained once on clean data, then frozen",
      },
      {
        label: "Evaluation",
        value:
          "Leave one attack out: the purifier trains on four attack families and is tested on the held-out fifth",
      },
      {
        label: "Builds on",
        value: "The CCWC 2026 generative purification pipeline",
        to: "/research/adversarial-ics/",
      },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Intrusion detectors on power distribution networks are learned models, and learned models can be flipped by perturbations too small for an operator to notice. Most purification defenses are evaluated against the same attacks they were trained on, which flatters the result — a real attacker picks the method, and it will not be one from the training set. What decides whether a defense is worth deploying is how it holds against an attack it has never seen.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Keeps the purification idea from the CCWC work — strip the perturbation out of the input before it reaches the model, instead of retraining the model to resist it — but swaps the generative adversarial purifier for a denoising autoencoder and measures generalization directly. Leave one attack out: the purifier trains on four attack families and is evaluated on the fifth, rotating which one is held out, with the detector trained once on clean data and then frozen throughout.",
        ],
      },
      {
        heading: "Where it stands",
        body: [
          "Accepted for physical presentation at IEEE UEMCON 2026 in New York (October 7–9), with Ilian Pangan, Vincent Vocal, Andre Cartagena and Dr. Yi Wang. Results and the IEEE Xplore link will be posted here once the proceedings are published.",
        ],
      },
    ],
    citation: {
      authors: [
        "Ralphael Alcober",
        "Ilian Tyrrell Pangan",
        "Vincent Vocal",
        "Yi Wang",
        "Andre Cartagena",
      ],
      title:
        "Generalizing to Unseen Adversarial Attacks in Industrial Control System Intrusion Detection with a Denoising Autoencoder Purifier",
      venue:
        "2026 IEEE Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), New York, October 2026. Accepted for physical presentation.",
    },
    paperUrl: "",
    linkNote:
      "Accepted for presentation — the paper will be linked here once it is on IEEE Xplore.",
  },
];

export const researchPath = (entry) => `/research/${entry.slug}/`;

export const pageTitle = (entry) => `${entry.title} | ${AUTHOR}`;

/** Finds an entry by its slug or one of its old slugs. */
export const findResearch = (slug) =>
  research.find(
    (entry) => entry.slug === slug || entry.aliases?.includes(slug)
  ) ?? null;
