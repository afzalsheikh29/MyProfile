import SkillsSection from '../SkillsSection';
import { Cloud, Code, Database, GitBranch, Monitor, Cpu, Bot, Zap } from "lucide-react";

export default function SkillsSectionExample() {
  const skills = [
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
  ];

  return <SkillsSection skills={skills} />;
}