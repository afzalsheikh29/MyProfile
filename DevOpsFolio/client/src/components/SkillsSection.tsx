import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code, Database, GitBranch, Monitor, Cpu, Bot, Zap } from "lucide-react";

interface Skill {
  name: string;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  color: string;
}

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const getIconComponent = (IconComponent: any, color: string) => (
    <IconComponent className={`w-6 h-6 ${color}`} />
  );

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subtitle">
              Comprehensive expertise across cloud platforms, automation tools, and modern DevOps practices
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-skill-${index}`}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    {getIconComponent(category.icon, category.color)}
                    <span className="text-lg font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs font-medium"
                        data-testid={`badge-skill-${skill.replace(/\s+/g, '-').toLowerCase()}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}