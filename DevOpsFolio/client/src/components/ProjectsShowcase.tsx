import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork, User } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
}

interface ProjectsShowcaseProps {
  projects: Project[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const handleProjectClick = (projectId: string, url: string) => {
    console.log(`Opening project ${projectId}: ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInProfile = () => {
    console.log('Opening LinkedIn profile');
    window.open('https://www.linkedin.com/in/afzalkhan29', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
              DevOps implementations, automation solutions, and cloud infrastructure projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`hover-elevate transition-all duration-300 ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
                data-testid={`card-project-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg font-bold text-foreground flex-1" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="default" className="ml-2" data-testid="badge-featured">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  {/* GitHub Stats */}
                  {(project.stars !== undefined || project.forks !== undefined) && (
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {project.stars !== undefined && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span data-testid={`text-stars-${index}`}>{project.stars}</span>
                        </div>
                      )}
                      {project.forks !== undefined && (
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span data-testid={`text-forks-${index}`}>{project.forks}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs"
                          data-testid={`badge-project-tech-${tech.replace(/\s+/g, '-').toLowerCase()}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleProjectClick(project.id, project.githubUrl)}
                      data-testid={`button-linkedin-${index}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                    
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleProjectClick(project.id, project.liveUrl!)}
                        data-testid={`button-live-${index}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={handleLinkedInProfile}
              data-testid="button-view-all-projects"
            >
              <User className="w-4 h-4 mr-2" />
              View Complete Portfolio on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}