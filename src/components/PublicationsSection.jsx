import { FileText, Clock } from "lucide-react";

const publications = [
  {
    title:
      "Adversarially Robust Industrial Control Systems Using a Generative Purification Pipeline",
    authors: "Alcober, R.",
    venue: "IEEE CCWC 2026",
    type: "Conference Paper",
    status: "published",
  },
  {
    title:
      "Enhancing Robustness of Deep Learning Models in Power Systems Against Adversarial Attacks",
    authors: "Alcober, R.",
    venue: "Innovations in Data Science and Analytics (Chapter ID: DSA-23)",
    type: "Book Chapter",
    status: "published",
  },
  {
    title:
      "HPC and Parallel GPU Computing for Accelerated Machine Learning Training",
    authors: "Alcober, R.",
    venue: "Manhattan University Research Group",
    type: "Summer Research",
    status: "in progress",
  },
];

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Publications & <span className="text-primary">Research</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Peer-reviewed work in machine learning robustness and security, plus ongoing research.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {publications.map((pub, key) => {
            const inProgress = pub.status === "in progress";
            const Icon = inProgress ? Clock : FileText;
            return (
              <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover text-left">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {pub.type}
                      </span>
                      {inProgress && (
                        <span className="px-2 py-1 text-xs font-medium border rounded-full border-primary text-primary">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold leading-snug">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
                    <p className="text-sm text-primary mt-1">{pub.venue}</p>
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
