import Link from 'next/link';
import { livros } from '../../../app-data.js';

interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
}

const allBooks: Book[] = livros.map((b, index) => ({
  id: index + 1,
  title: b.nome_do_curso,
  description: b.descrição,
  image: b.imagem,
}));

export default function BooksPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#141414' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#141414' }}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-wgite tracking-tight">Todos os Livros</h1>
          <p className="mt-2 text-white">Explore nossa coleção completa de livros sobre dados, análise e tecnologia.</p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group rounded-lg overflow-hidden bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 truncate">{book.title}</h3>
                <p className="mt-1 text-sm text-gray-600 truncate">{book.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
