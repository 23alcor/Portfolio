import { Briefcase, Code, BrainCircuit } from "lucide-react"

export const AboutSection = () => {
  return (
  <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary"> Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Software Engineer & Computer Engineering Senior</h3>

          <p className="text-muted-foreground">
            I'm a senior Computer Engineering student at Manhattan University (B.S. expected May 2027) who builds software end to end — from React front-ends to Python/SQL data pipelines and machine learning models. I care most about writing clean, reliable code that ships and solves real problems.
          </p>

          <p className="text-muted-foreground">
            As an engineering co-op at Con Edison, I build and containerize Python and SQL data-processing pipelines for transformer failure analysis. As an undergraduate researcher, I lead a team developing PyTorch model-training workflows for adversarially robust machine learning — work that has produced two published papers, with ongoing research in HPC and parallel GPU computing. Alongside that, I run my own business and ship side projects across the full stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a href="/Portfolio/Ralphael_Resume.pdf"download className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className='font-semibold text-lg'> Full-Stack Development </h4>
                <p className="text-muted-foreground">I build complete applications with React, Node.js, FastAPI, and PostgreSQL — from responsive UIs to REST APIs and deployment.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <BrainCircuit className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className='font-semibold text-lg'> ML & Data Engineering </h4>
                <p className="text-muted-foreground">I develop PyTorch model-training and data pipelines with Python, pandas, and NumPy — published research in adversarially robust machine learning.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className='font-semibold text-lg'> Engineering Co-Op @ Con Edison </h4>
                <p className="text-muted-foreground">I build Python, SQL, and Docker data-processing and classification pipelines for transformer failure analysis, supporting engineering decisions at scale.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  )
}