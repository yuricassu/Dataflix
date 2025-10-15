import Link from 'next/link';
import { cursoprograma } from '../../../../app-data.js';

interface Courseprograma {
  id: number;
  title: string;
  description: string;
  image: string;
  youtubeUrl: string;
}

const courses: Courseprograma[] = cursoprograma.map((c, index) => ({
  id: index + 1,
  title: c.nome_do_curso,
  description: c.descrição,
  image: c.imagem,
  youtubeUrl: c.link,
}));

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const courseId = parseInt(params.id);
  const coursedev = courses.find(c => c.id === courseId);

  if (!coursedev) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Curso não encontrado</h1>
          <Link 
            href="/programming-courses" 
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Voltar para os cursos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen"  style={{ backgroundColor: '#141414' }}>
      {/* Header */}
      <div  style={{ backgroundColor: '#141414' }}>
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/programming-courses" 
            className="text-white hover:text-blue-800 font-medium mb-4 inline-block"
          >
            Ver todos os cursos
          </Link>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            {coursedev.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src={coursedev.youtubeUrl
                      .replace('watch?v=', 'embed/')
                      .replace('playlist?list=', 'embed/videoseries?list=')}
                    title={coursedev.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Sobre o Curso
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {coursedev.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
