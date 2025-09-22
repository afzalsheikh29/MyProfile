import Navigation from '../Navigation';

export default function NavigationExample() {
  const handleResumeDownload = () => {
    console.log('Resume download triggered from navigation');
    // TODO: remove mock functionality - implement actual resume download
  };

  return <Navigation onResumeDownload={handleResumeDownload} />;
}