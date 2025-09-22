import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  type: string; // "current" or "past"
  achievements: string[];
  technologies: string[];
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-experience-title">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-subtitle">
              Building scalable cloud infrastructure and automating DevOps workflows
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative" data-testid={`experience-item-${index}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block shadow-sm"></div>
                  
                  {/* Experience Card */}
                  <div className="md:ml-16">
                    <Card className="hover-elevate transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <CardTitle className="text-xl font-bold text-foreground" data-testid={`text-position-${index}`}>
                            {experience.position}
                          </CardTitle>
                          {experience.type === "current" && (
                            <Badge variant="default" className="w-fit" data-testid="badge-current">
                              Current Role
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            <span data-testid={`text-company-${index}`}>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span data-testid={`text-location-${index}`}>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            <span data-testid={`text-duration-${index}`}>{experience.duration}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achIndex) => (
                              <li 
                                key={achIndex} 
                                className="text-sm text-muted-foreground flex items-start gap-2"
                                data-testid={`text-achievement-${index}-${achIndex}`}
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="outline" 
                                className="text-xs"
                                data-testid={`badge-tech-${tech.replace(/\s+/g, '-').toLowerCase()}`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}