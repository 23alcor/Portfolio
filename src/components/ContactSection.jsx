import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {

  const {toast} = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon"
      })
      setIsSubmitting(false)
    }, 1500)

    
  }

  return (
    <section id='contact' className="py-24 px-4 relative bg-seconday/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just chatting
          about tech and projects. Whether you have a question, an idea, or
          simply want to connect, feel free to reach out! You can contact me
          through the form below or directly via email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ralcober01@manhattan.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ralcober01@manhattan.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+19146436450"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (914) 643-6450
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    New York
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a target="_blank" href="https://www.linkedin.com/in/ralphalc/">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form action="" className="space-y-6">
              <div>
                <label 
                htmlFor="name" 
                className="block text-sm font-medium mb-2"
                > Your Name 
                </label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outlined-hiddn focus:ring-2 focus:ring-primary" 
                placeholder="Ralphael Alcober..." />
                <label 
                htmlFor="email" 
                className="block text-sm font-medium mb-2"
                > Your Email
                </label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outlined-hiddn focus:ring-2 focus:ring-primary" 
                placeholder="John@gmail.com" />
                <label 
                htmlFor="message" 
                className="block text-sm font-medium mb-2"
                > Your Message 
                </label>
                <textarea
                id="message" 
                name="message" 
                required 
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outlined-hiddn focus:ring-2 focus:ring-primary resize-none" 
                placeholder="Hello, I'd like to talk about..." />
              </div>

              <button onClick={handleSubmit} type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

              )}>

                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
