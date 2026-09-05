import { GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just chatting
          about tech and projects. Whether you have a question, an idea, or
          simply want to connect, feel free to reach out directly via email or on
          LinkedIn.
        </p>

        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:alcoberralphael@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  alcoberralphael@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">School Email</h4>
                <a
                  href="mailto:ralcober01@manhattan.edu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ralcober01@manhattan.edu
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">New York, New York</span>
              </div>
            </div>
          </div>

          <div className="pt-10 text-center">
            <h4 className="mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ralphalc/"
                aria-label="LinkedIn"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
