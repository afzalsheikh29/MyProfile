import { Button } from "@/components/ui/button";
import { Download, Github, User, Mail } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_DevOps_engineer_headshot_f9834f31.png";

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  onResumeDownload?: () => void;
}

export default function HeroSection({
  name,
  title,
  tagline,
  location,
  email,
  phone,
  linkedinUrl,
  githubUrl,
  onResumeDownload
}: HeroSectionProps) {
  const handleContactClick = () => {
    console.log('Contact clicked');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src={profileImage}
                alt={`${name} - ${title}`}
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
                data-testid="img-profile"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4" data-testid="text-name">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-2" data-testid="text-title">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-tagline">
              {tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
              <span data-testid="text-location">{location}</span>
              <span className="text-border">•</span>
              <a href={`mailto:${email}`} className="hover:text-primary transition-colors" data-testid="link-email">
                {email}
              </a>
              <span className="text-border">•</span>
              <a href={`tel:${phone}`} className="hover:text-primary transition-colors" data-testid="link-phone">
                {phone}
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="min-w-[140px]"
              data-testid="button-contact"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={onResumeDownload}
              className="min-w-[140px]"
              data-testid="button-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <User className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}