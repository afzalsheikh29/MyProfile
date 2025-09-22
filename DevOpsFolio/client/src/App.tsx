import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Portfolio Components
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";

// Icons for skills
import { Cloud, Code, Database, GitBranch, Monitor, Cpu, Bot, Zap } from "lucide-react";

// Portfolio data
const portfolioData = {
  personal: {
    name: "Afzal Khan",
    title: "DevOps Engineer", 
    tagline: "Specializing in multi-cloud platforms, CI/CD automation, and intelligent workflow optimization. Over 1 year of experience in AWS, Azure, GCP with expertise in containerization, infrastructure as code, and AI-driven automation solutions.",
    location: "Noida, India",
    email: "khan29afzal@gmail.com",
    phone: "+91 91930 01060",
    linkedinUrl: "https://www.linkedin.com/in/afzalkhan29",
    githubUrl: "https://github.com/afzalsheikh29"
  },
  skills: [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "text-blue-500",
      skills: ["AWS", "Azure", "GCP", "EC2", "S3", "Lambda", "VPC"]
    },
    {
      title: "Infrastructure as Code",
      icon: Code,
      color: "text-green-500", 
      skills: ["Terraform", "CloudFormation", "ARM Templates", "Pulumi"]
    },
    {
      title: "CI/CD & Automation",
      icon: GitBranch,
      color: "text-purple-500",
      skills: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Azure DevOps"]
    },
    {
      title: "Containerization",
      icon: Cpu,
      color: "text-orange-500",
      skills: ["Docker", "Kubernetes", "OpenShift", "Helm", "Podman"]
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      color: "text-cyan-500",
      skills: ["Prometheus", "Grafana", "CloudWatch", "ELK Stack", "New Relic"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-red-500",
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "Redis", "MongoDB"]
    },
    {
      title: "AI & Automation",
      icon: Bot,
      color: "text-indigo-500",
      skills: ["Flowise", "n8n", "Make.com", "AI Chatbots", "Workflow Automation"]
    },
    {
      title: "Programming & Scripting",
      icon: Zap,
      color: "text-yellow-500",
      skills: ["Python", "Bash", "JavaScript", "YAML", "JSON", "Shell Scripting"]
    }
  ],
  experiences: [
    {
      id: "ath-devops-engineer",
      position: "DevOps Engineer",
      company: "ATH Infosystems Pvt. Ltd.",
      location: "Noida, IN",
      duration: "Sep 2024 – Present",
      type: "current",
      achievements: [
        "Built Flowise LLM chatbot for 24/7 lead qualification and instant quotes",
        "Automated lead capture and workflows with n8n and Make.com",
        "Orchestrated n8n workflows for lead extraction, geo-validation, email follow-ups, and alerts",
        "Implemented multi-language AI chatbot with compliance auditing",
        "Deployed AWS SAM serverless backend with Lambda, DynamoDB, and S3",
        "Provisioned infrastructure with Terraform, enabling turnkey self-hosted deployment",
        "Listed products and private offers on AWS, Azure, GCP marketplaces",
        "Integrated HawkSearch into BigCommerce via Python Scripts and APIs",
        "Containerized apps with Docker/Kubernetes across AWS, Azure, GCP",
        "Built Jenkins and GitLab CI/CD pipelines, cutting deploy time 50%",
        "Implemented Prometheus, Grafana, CloudWatch dashboards",
        "Automated alerts and incident workflows, reducing downtime 30%",
        "Managed AWS, Azure, GCP environments (99.9% uptime)",
        "Optimized resources to cut cloud costs 25%",
        "Automated tasks with Python/Bash, boosting efficiency 35%"
      ],
      technologies: [
        "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", 
        "GitLab CI/CD", "Python", "Bash", "n8n", "Make.com", "Flowise", 
        "Prometheus", "Grafana", "Lambda", "DynamoDB", "S3"
      ]
    },
    {
      id: "ath-intern",
      position: "Cloud DevOps Intern",
      company: "ATH Infosystems Pvt. Ltd.",
      location: "Noida, IN",
      duration: "May 2024 – Aug 2024",
      type: "past",
      achievements: [
        "Mastered Linux CLI, user/groups, shell scripting",
        "Deployed LAMP stacks: Apache, MySQL, PHP; configured ports and subnets",
        "Installed DevOps Tools on Linux; integrated with MySQL/PostgreSQL backends",
        "Configured CI/CD essentials and monitoring dashboards with DB storage",
        "Configured Apache/Nginx reverse proxies, virtual hosts, SSL, firewall rules",
        "Managed networking: VPCs, subnets, security groups",
        "Created AWS, Azure, GCP marketplace offers; provisioned EC2/VM instances, S3 buckets",
        "Learned Multicloud setup workflows, IAM roles, policies, and compliance"
      ],
      technologies: [
        "Linux", "Apache", "Nginx", "MySQL", "PostgreSQL", "PHP", "AWS EC2", 
        "Azure VMs", "GCP Compute", "VPC", "IAM", "SSL/TLS", "Shell Scripting"
      ]
    }
  ],
  projects: [
    {
      id: "flowise-ai-chatbot",
      title: "AI-Powered Lead Qualification System",
      description: "Built a comprehensive Flowise LLM chatbot system for 24/7 lead qualification and instant quote generation. Integrated with multi-language support and compliance auditing for enhanced customer experience.",
      technologies: ["Flowise", "AI/ML", "LLM", "JavaScript", "API Integration", "Multi-language Support"],
      githubUrl: "https://www.linkedin.com/in/afzalkhan29",
      featured: true
    },
    {
      id: "n8n-automation-workflows",
      title: "Intelligent Workflow Automation Platform",
      description: "Orchestrated complex n8n workflows for automated lead extraction, geo-validation, email follow-ups, and real-time alerts. Streamlined business processes with AI-driven automation.",
      technologies: ["n8n", "Make.com", "Workflow Automation", "Python", "APIs", "Geo-validation"],
      githubUrl: "https://www.linkedin.com/in/afzalkhan29",
      featured: true
    },
    {
      id: "aws-serverless-infrastructure",
      title: "Serverless Cloud Infrastructure",
      description: "Deployed scalable AWS SAM serverless backend with Lambda functions, DynamoDB database, and S3 storage. Implemented Infrastructure as Code with Terraform for automated provisioning.",
      technologies: ["AWS SAM", "Lambda", "DynamoDB", "S3", "Terraform", "IaC", "Serverless"],
      githubUrl: "https://www.linkedin.com/in/afzalkhan29",
      featured: true
    },
    {
      id: "multi-cloud-marketplace",
      title: "Multi-Cloud Marketplace Integration",
      description: "Successfully listed and managed products across AWS, Azure, and GCP marketplaces. Created private offers and managed cross-cloud deployment strategies.",
      technologies: ["AWS Marketplace", "Azure Marketplace", "GCP Marketplace", "Cloud Management", "DevOps"],
      githubUrl: "https://www.linkedin.com/in/afzalkhan29"
    },
    {
      id: "ecommerce-search-integration",
      title: "E-commerce Search Engine Integration", 
      description: "Integrated HawkSearch into BigCommerce platform using Python scripts and APIs. Enhanced product discovery and search functionality for improved user experience.",
      technologies: ["HawkSearch", "BigCommerce", "Python", "APIs", "E-commerce", "Search Optimization"],
      githubUrl: "https://www.linkedin.com/in/afzalkhan29"
    },
    {
      id: "cicd-pipeline-optimization",
      title: "CI/CD Pipeline Optimization",
      description: "Built and optimized Jenkins and GitLab CI/CD pipelines across multiple cloud platforms. Achieved 50% reduction in deployment time and improved reliability.",
      technologies: ["Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "Pipeline Optimization", "DevOps"],
      githubUrl: "https://www.linkedin.com/in/afzalkhan29"
    }
  ]
};

function Portfolio() {
  const handleResumeDownload = () => {
    console.log('Resume download initiated');
    // TODO: remove mock functionality - implement actual resume download from Supabase
    
    // For now, create a temporary link to download the attached resume
    const resumeUrl = '/attached_assets/Afzal_Khan_Resume_1758538011343.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Afzal_Khan_DevOps_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = async (data: { name: string; email: string; message: string }) => {
    console.log('Contact form submitted:', data);
    // TODO: remove mock functionality - implement actual form submission to Supabase
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation onResumeDownload={handleResumeDownload} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div id="home">
          <HeroSection
            name={portfolioData.personal.name}
            title={portfolioData.personal.title}
            tagline={portfolioData.personal.tagline}
            location={portfolioData.personal.location}
            email={portfolioData.personal.email}
            phone={portfolioData.personal.phone}
            linkedinUrl={portfolioData.personal.linkedinUrl}
            githubUrl={portfolioData.personal.githubUrl}
            onResumeDownload={handleResumeDownload}
          />
        </div>

        {/* Skills Section */}
        <SkillsSection skills={portfolioData.skills} />

        {/* Experience Section */}
        <ExperienceTimeline experiences={portfolioData.experiences} />

        {/* Projects Section */}
        <ProjectsShowcase projects={portfolioData.projects} />

        {/* Contact Section */}
        <ContactSection
          contactInfo={portfolioData.personal}
          onFormSubmit={handleFormSubmit}
        />
      </main>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      {/* Fallback - redirect to home */}
      <Route>
        <Portfolio />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;