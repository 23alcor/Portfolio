import { Briefcase, Code, User } from "lucide-react"

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
          <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

          <p className="text-muted-foreground">
            I am dedicated to crafting sleek, responsive digital experiences. I love turning ideas into interactive web apps that blend clean design with powerful functionality.
          </p>

          <p className="text-muted-foreground">
          With a strong foundation in JavaScript, React, and modern web technologies, I build projects that are both scalable and engaging. I’m always exploring new frameworks and design patterns to stay ahead in a fast-paced tech landscape. Whether it's front-end UI or back-end logic, I aim to deliver thoughtful, high-quality code that makes an impact.
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
                <h4 className='font-semibold text-lg'> Web Development </h4>
                <p className="text-muted-foreground">I build responsive and dynamic websites that deliver smooth user experiences across all devices.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className='font-semibold text-lg'> Person </h4>
                <p className="text-muted-foreground">Outside of coding, I run a small business, blending creativity with hands-on problem solving.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className='font-semibold text-lg'> Current </h4>
                <p className="text-muted-foreground">I'm a junior Computer Engineering student at Manhattan College with a passion for web development and technology. I enjoy building clean, responsive applications and continuously expanding my skills in software, electrical, and systems engineering.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  )
}