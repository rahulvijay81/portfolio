import MouseSpotlight from '@/components/MouseSpotlight';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Portfolio() {
  return (
    <main className="min-h-screen lg:flex">
      <MouseSpotlight />
      <Sidebar />
      <MainContent />
    </main>
  );
}