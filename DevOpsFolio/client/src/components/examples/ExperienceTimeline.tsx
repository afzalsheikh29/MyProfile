import ExperienceTimeline from '../ExperienceTimeline';

export default function ExperienceTimelineExample() {
  const experiences = [
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
  ];

  return <ExperienceTimeline experiences={experiences} />;
}