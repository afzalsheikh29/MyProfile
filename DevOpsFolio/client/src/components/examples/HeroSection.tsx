import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  const handleResumeDownload = () => {
    console.log('Resume download triggered');
    // TODO: remove mock functionality - implement actual resume download
  };

  return (
    <HeroSection
      name="Afzal Khan"
      title="DevOps Engineer"
      tagline="Specializing in multi-cloud platforms, CI/CD automation, and intelligent workflow optimization. Over 1 year of experience in AWS, Azure, GCP with expertise in containerization, infrastructure as code, and AI-driven automation solutions."
      location="Noida, India"
      email="khan29afzal@gmail.com"
      phone="+91 91930 01060"
      linkedinUrl="https://www.linkedin.com/in/afzalkhan29"
      githubUrl="https://github.com/afzalsheikh29"
      onResumeDownload={handleResumeDownload}
    />
  );
}