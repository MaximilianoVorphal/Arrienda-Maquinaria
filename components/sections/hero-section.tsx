'use client';

import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[50vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'url(https://salfamaquinaria.cl/wp-content/uploads/2024/06/Altas-temperaturas-min.png)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/90 to-[#1e293b]/70" />
      <div className="relative z-10 container mx-auto px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
  <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">
    Cotiza en línea y comienza tu proyecto hoy
  </h1>
  <p className="text-lg md:text-1xl mb-6 text-gray-200">
    ¿Quieres ser un proveedor de máquinas?
  </p>
  <div className="flex items-center gap-4">
    {/* Botón de Inscríbete */}
    <Link href="/registro">
      <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
        Inscríbete
      </Button>
    </Link>

    {/* Botón de Nuestros Equipos */}
    <Link href="/catalog">
      <Button size="lg" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
        Nuestros Equipos
      </Button>
    </Link>
  </div>
</div>


          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
            <div className="grid grid-cols-1 gap-4"> {/* Reduce el gap entre los servicios */}
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg" // Reduce el padding
                  style={{ maxWidth: '450px' }} // Limita el ancho del cuadro
                >
                  <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3> {/* Reduce el tamaño del texto */}
                  <p className="text-xs text-gray-200">{service.description}</p> {/* Reduce el tamaño del texto */}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
