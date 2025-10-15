import Carousel from '@/components/Carousel';
import CoursesSection from '@/components/CoursesSection';
import ToolsSection from '@/components/ToolsSection';
import BooksSection from '@/components/BooksSection';
import CertificatesSection from '@/components/CertificatesSection';
import CursoProgramaSection from '@/components/CursoProgramaSection';



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Carousel Section */}
      <Carousel />
      
      {/* Courses Section */}
      <CoursesSection />
      
      <CursoProgramaSection /> {/* Nova seção */}

      {/* Tools Section */}
      <ToolsSection />
      
      {/* Books Section */}
      <BooksSection />
      
      {/* Certificates Section */}
      <CertificatesSection />
    </div>
  );
}
