import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Python", level: 90, category: "backend" },
  { name: "C++", level: 60, category: "backend" },
  { name: "C", level: 60, category: "backend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "MatLab", level: 85, category: "tools" },
  { name: "PSpice", level: 85, category: "tools" },
  { name: "Microsoft Excel", level: 90, category: "tools" },
  { name: "Microsoft Word", level: 90, category: "tools" },
  { name: "Arduino", level: 80, category: "hardware" },
  { name: "Raspberry Pi", level: 80, category: "hardware" },
  { name: "Machine Learning", level: 80, category: "ai/ml" },
  { name: "Public Speaking / Communication", level: 90, category: "soft" },
  { name: "Leadership / Team Collaboration", level: 90, category: "soft" },
  { name: "Customer Service", level: 95, category: "soft" },
  { name: "Entrepreneurship", level: 95, category: "business" },
  { name: "Web Hosting / Portfolio Building", level: 80, category: "tools" },
  { name: "Soldering / Circuit Building", level: 75, category: "hardware" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "Neon (Postgres Hosting)", level: 75, category: "tools" },
  { name: "Vite", level: 85, category: "frontend" },
  { name: "Render (Deployment)", level: 80, category: "tools" },
  { name: "GitHub Pages", level: 80, category: "tools" },
  { name: "RESTful API Design", level: 85, category: "backend" },
];

const categories = ["all", "frontend", "backend", "tools", "hardware", "ai/ml", "soft", "business"]

export const SkillsSection = () => {

  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory)

  return (
  <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary"> Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, key) => (
          <button 
          className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
          )}
          key={key}
          onClick={() => setActiveCategory(category)}
          >
            {category}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skills, key) => (
          <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
            <div className="text-left mb-4">
              <h3 className="font-semibold text-lg">{skills.name}</h3>
            </div>
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
              style={{width: skills.level + "%"}}/>
            </div>

            <div className="text-right mt-1">
              <span className="text-sm text-muted-foreground">{skills.level}%</span>
            </div>

          </div>
        ))}

      </div>

    </div>

  </section>
  )
}