import { Server, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-gradient"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Backend Engineer
            </h3>

            <p className="text-muted-foreground">
              I specialize in designing and developing scalable backend systems that power real-world applications.
              My work focuses on clean architecture, structured API design,
              and efficient database modeling to ensure performance, reliability, and long-term maintainability.
            </p>

            <p className="text-muted-foreground">
              With a strong analytical foundation and engineering mindset,
              I approach backend development as a systems discipline — transforming business requirements into structured,
              high-performance server-side solutions.
              I build systems designed not only to function, but to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gradient">API & Backend Development</h4>
                  <p className="text-muted-foreground">
                    Designing secure, scalable RESTful APIs and implementing structured business logic built for performance and long-term growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Database className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gradient">Database & Data Architecture</h4>
                  <p className="text-muted-foreground">
                    Designing optimized relational and NoSQL databases with efficient data modeling, indexing strategies, and query performance in mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Server className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gradient">System Design & Scalability</h4>
                  <p className="text-muted-foreground">
                    Architecting backend infrastructures that handle growth, maintain reliability, and support evolving product requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
