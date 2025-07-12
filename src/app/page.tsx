import MouseSpotlight from '@/components/MouseSpotlight';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Portfolio() {
  return (
    <div className="min-h-screen flex">
      <MouseSpotlight />
      <Sidebar />
      <MainContent />
    </div>
  );
}