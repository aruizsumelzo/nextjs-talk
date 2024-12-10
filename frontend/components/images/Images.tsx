/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const Images = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col items-center">
      <h1 className="text-black mb-12 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Comparación: Next.js <code>&lt;Image&gt;</code> vs{' '}
        <code>&lt;img&gt;</code>
      </h1>

      <div className="flex flex-row gap-12 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-black mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Usando <code>&lt;Image&gt;</code>
          </h2>
          <div className="relative w-64 h-64 border border-gray-300 rounded-md shadow-sm">
            <Image
              src="/logo.svg"
              alt="Deloitte Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-gray-700 space-y-4 mt-10">
            <p className="text-lg font-medium">Ventajas:</p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>Optimización automática</li>
              <li>Lazy loading</li>
              <li>Soporte responsivo</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-black mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Usando <code>&lt;img&gt;</code>
          </h2>
          <div className="w-64 h-64 border border-gray-300 rounded-md shadow-sm flex items-center justify-center">
            <img
              src="/logo1.svg"
              alt="Deloitte Logo"
              className="max-w-full max-h-full"
            />
          </div>
          <div className="text-gray-700 space-y-4 mt-10">
            <p className="text-lg font-medium">Limitaciones:</p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>No optimiza automáticamente</li>
              <li>No incluye lazy loading por defecto</li>
              <li>Requiere picar código para el responsive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
