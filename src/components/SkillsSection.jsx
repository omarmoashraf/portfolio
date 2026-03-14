import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Backend
  { name: ".NET Core", category: "backend" },
  { name: "C#", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Server Side Architecture", category: "backend" },
  { name: "REST API Development", category: "backend" },
  { name: "JWT", category: "backend" },

  // Database
  { name: "MongoDB", category: "database" },
  { name: "SQL Server", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "EF Core", category: "database" },
  { name: "LINQ", category: "database" },

  // Frontend
  { name: "JavaScript", category: "frontend" },
  { name: "React Js", category: "frontend" },
  { name: "AJAX", category: "frontend" },

  // Architecture & Principles
  { name: "Clean Architecture", category: "architecture" },
  { name: "MVC Architecture", category: "architecture" },
  { name: "OOP", category: "architecture" },
  { name: "SOLID Principles", category: "architecture" },
  { name: "Data Structures & Algorithms", category: "architecture" },
  { name: "Agile", category: "architecture" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Postman", category: "tools" },
];

const categories = ["all", "backend", "database", "frontend", "architecture", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(59,130,246,0.3)] scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {category === "architecture" ? "Architecture & Principles" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="gradient-border p-4 card-hover flex items-center justify-center text-center h-full min-h-[100px] animate-fade-in group"
              style={{ animationDelay: `${key * 0.05}s` }}
            >
              <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
