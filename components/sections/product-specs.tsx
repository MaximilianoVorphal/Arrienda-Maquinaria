'use client';

export function ProductSpecs() {
  const specifications = [
    { label: 'Marca', value: 'VOLVO' },
    { label: 'Modelo', value: 'MC110' },
    { label: 'Tipo', value: 'Minicargador' },
    { label: 'Capacidad de Carga', value: '1000 kg' },
    { label: 'Potencia', value: '74 HP' },
    { label: 'Peso Operativo', value: '2900 kg' },
    { label: 'Altura de Descarga', value: '2.3 m' },
    { label: 'Capacidad del Balde', value: '0.4 m³' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#f97316]">Especificaciones Técnicas</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specifications.map((spec, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-semibold text-[#1e293b] mb-2">{spec.label}</h3>
              <p className="text-[#64748b]">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
