import Link from 'next/link';
import { ferramenta } from '../../../app-data.js';

interface Tool {
  id: number;
  title: string;
  description: string;
  image: string;
}

const allTools: Tool[] = ferramenta.map((t, index) => ({
  id: index + 1,
  title: t.nome_do_curso,
  description: t.descrição,
  image: t.imagem,
}));

export default function ToolsPage() {
  return (
    <div className="min-h-screen"  style={{ backgroundColor: '#141414' }}>
      {/* Header */}
      <div  style={{ backgroundColor: '#141414' }}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-white tracking-tight">Todas as Ferramentas</h1>
          <p className="mt-2 text-white">Explore nossa coleção completa de ferramentas para desenvolvimento e produtividade.</p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allTools.map((tool) => (
            <Link 
              key={tool.id} 
              href={`/tools/${tool.id}`}
              className="group rounded-lg overflow-hidden bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 truncate">{tool.title}</h3>
                <p className="mt-1 text-sm text-gray-600 truncate">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
