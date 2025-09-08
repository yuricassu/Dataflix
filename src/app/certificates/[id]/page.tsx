import Link from 'next/link';
import { certificação } from '../../../../app-data.js';

interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const certificates: Certificate[] = certificação.map((c, index) => ({
  id: index + 1,
  title: c.nome_do_curso,
  description: c.descrição,
  image: c.imagem,
  url: c.link,
}));

interface CertificatePageProps {
  params: {
    id: string;
  };
}

export default function CertificatePage({ params }: CertificatePageProps) {
  const certificateId = parseInt(params.id);
  const certificate = certificates.find(c => c.id === certificateId);

  if (!certificate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Certificação não encontrada</h1>
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Voltar para home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#141414' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#141414' }}>
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="text-white hover:text-blue-800 font-medium mb-4 inline-block"
          >
            ← Voltar para home
          </Link>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            {certificate.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Section */}
            <div className="lg:col-span-2">
              <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
            </div>

            {/* Description Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Sobre a Certificação
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {certificate.description}
                </p>
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Ver Certificação
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
