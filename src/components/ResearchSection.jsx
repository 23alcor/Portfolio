import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { findResearch, research, researchPath } from "../data/research";

export const ResearchSection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Entries used to open in a modal at /?research=<slug>. Links shared in that
  // form now forward to the entry's own page.
  useEffect(() => {
    const match = findResearch(searchParams.get("research"));
    if (match) navigate(researchPath(match), { replace: true });
  }, [searchParams, navigate]);

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
            <Link
              key={item.slug}
              to={researchPath(item)}
              className="group block w-full overflow-hidden rounded-lg bg-card text-left shadow-xs card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                  Read more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
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
    </section>
  );
};
