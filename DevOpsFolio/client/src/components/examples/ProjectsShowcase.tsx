import ProjectsShowcase from '../ProjectsShowcase';

export default function ProjectsShowcaseExample() {
  // TODO: remove mock functionality - replace with real project data from LinkedIn profile
  const projects = [
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
    }
  ];

  return <ProjectsShowcase projects={projects} />;
}