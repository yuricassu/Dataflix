import Carousel from '@/components/Carousel';
import CoursesSection from '@/components/CoursesSection';
import ToolsSection from '@/components/ToolsSection';
import BooksSection from '@/components/BooksSection';
import CertificatesSection from '@/components/CertificatesSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Carousel Section */}
      <Carousel />
      
      {/* Courses Section */}
      <CoursesSection />
      
      {/* Tools Section */}
      <ToolsSection />
      
      {/* Books Section */}
      <BooksSection />
      
      {/* Certificates Section */}
      <CertificatesSection />
    </div>
  );
}
