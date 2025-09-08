import Link from 'next/link';
import { ferramenta } from '../../../../app-data.js';

interface Tool {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const tools: Tool[] = ferramenta.map((t, index) => ({
  id: index + 1,
  title: t.nome_do_curso,
  description: t.descrição,
  image: t.imagem,
  url: t.link,
}));

interface ToolPageProps {
  params: {
    id: string;
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  const toolId = parseInt(params.id);
  const tool = tools.find(t => t.id === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ferramenta não encontrada</h1>
          <Link 
            href="/tools" 
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Voltar para ferramentas
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
            href="/tools" 
            className="text-white hover:text-blue-800 font-medium mb-4 inline-block"
          >
            Ver todas as ferramentas
          </Link>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            {tool.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Section */}
            <div className="lg:col-span-2">
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>

            {/* Description Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Sobre a Ferramenta
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Abrir Ferramenta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
