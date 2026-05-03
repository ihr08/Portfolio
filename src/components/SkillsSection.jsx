import { cn } from "@/lib/utils";

const skills = [
  // Frontend Core
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "SASS", level: 90, category: "frontend" },

  // Libraries & Frameworks
  { name: "React", level: 90, category: "libraries" },
  { name: "Next.js", level: 80, category: "libraries" },
  { name: "Vue.js", level: 90, category: "libraries" },
  { name: "GSAP", level: 90, category: "libraries" },
  { name: "Zustand", level: 90, category: "libraries" },
  { name: "Supabase", level: 90, category: "libraries" },
  { name: "Puter.js", level: 90, category: "libraries" },
  { name: "3d.js", level: 90, category: "libraries" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Django", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Database", level: 65, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Vite", level: 95, category: "tools" },
  { name: "Vercel", level: 95, category: "tools" },
];

const categories = [
  { id: "frontend", label: "Frontend", color: "from-blue-500 to-indigo-500" },
  { id: "libraries", label: "Libraries & Frameworks", color: "from-green-500 to-emerald-500" },
  { id: "backend", label: "Backend", color: "from-purple-500 to-violet-500" },
  { id: "tools", label: "Tools", color: "from-orange-500 to-red-500" }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ id, label, color }) => {
            const categorySkills = skills.filter(skill => skill.category === id);
            return (
              <div key={id} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <h3 className="font-bold text-xl mb-6 text-center pb-3 border-b border-secondary/50">
                  <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {label}
                  </span>
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, key) => (
                    <div key={key} className="group">
                      <div className="text-left mb-3">
                        <h4 className="font-semibold text-base group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] bg-gradient-to-r ${color}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
