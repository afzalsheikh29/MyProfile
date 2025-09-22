import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  const contactInfo = {
    email: "khan29afzal@gmail.com",
    phone: "+91 91930 01060",
    location: "Noida, India",
    linkedinUrl: "https://www.linkedin.com/in/afzalkhan29",
    githubUrl: "https://github.com/afzalsheikh29"
  };

  const handleFormSubmit = async (data: { name: string; email: string; message: string }) => {
    console.log('Form submission:', data);
    // TODO: remove mock functionality - implement actual form submission to backend/Supabase
  };

  return (
    <ContactSection 
      contactInfo={contactInfo} 
      onFormSubmit={handleFormSubmit}
    />
  );
}