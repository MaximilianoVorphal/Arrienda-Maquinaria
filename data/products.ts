export const products = [
  {
    id: 1,
    name: 'Minicargador VOLVO MC110',
    description: 'Minicargador compacto ideal para espacios reducidos',
    price: '$2.200.000 mensual',
    priceValue: 2200000,
    image: 'https://www.arriendamaquinaria.cl/dir/imgs/WhatsApp-Image-2024-11-25-at-8.50.50-PM.2511242030.png',
    category: 'Cargadores',
    operationType: ['rent'],
    specifications: {
      brand: 'VOLVO',
      model: 'MC110',
      year: 2019,
      hours: 0,
      location: 'Quillota'
    }
  },
  {
    id: 2,
    name: 'Excavadora CAT 320',
    description: 'Excavadora hidráulica de alto rendimiento',
    price: '$5.500.000 mensual',
    priceValue: 5500000,
    image: 'https://images.unsplash.com/photo-1585366119957-e977e594539e?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Excavadoras',
    operationType: ['rent'],
    specifications: {
      brand: 'CAT',
      model: '320',
      year: 2020,
      hours: 1500,
      location: 'Santiago'
    }
  },
  {
    id: 3,
    name: 'Grúa Horquilla Toyota 8FGCU25',
    description: 'Grúa horquilla a combustión para trabajo pesado',
    price: '$1.800.000 mensual',
    priceValue: 1800000,
    image: 'https://images.unsplash.com/photo-1606753516772-d7636f0a692d?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Grúas Horquilla',
    operationType: ['sale'],
    specifications: {
      brand: 'Toyota',
      model: '8FGCU25',
      year: 2018,
      hours: 500,
      location: 'Viña del Mar'
    }
  },
  {
    id: 4,
    name: 'Retroexcavadora JCB 3CX',
    description: 'Retroexcavadora versátil para múltiples tareas',
    price: '$3.800.000 mensual',
    priceValue: 3800000,
    image: 'https://images.unsplash.com/photo-1625238992655-2773d0749d47?q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Retroexcavadoras',
    operationType: ['rent', 'sale'],
    specifications: {
      brand: 'JCB',
      model: '3CX',
      year: 2021,
      hours: 800,
      location: 'Concepción'
    }
  },
  {
    id: 5,
    name: 'Rodillo Compactador Dynapac CA250',
    description: 'Rodillo compactador de suelos de alta eficiencia',
    price: '$4.200.000 mensual',
    priceValue: 4200000,
    image: 'https://images.unsplash.com/photo-1636488873950-8592715bb962?q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Compactadores',
    operationType: ['rent'],
    specifications: {
      brand: 'Dynapac',
      model: 'CA250',
      year: 2019,
      hours: 1200,
      location: 'Antofagasta'
    }
  },
  {
    id: 6,
    name: 'Motoniveladora CAT 140M',
    description: 'Motoniveladora para nivelación de terrenos',
    price: '$6.000.000 mensual',
    priceValue: 6000000,
    image: 'https://images.unsplash.com/photo-1635561535643-809f4fe5d7f1?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Motoniveladoras',
    operationType: ['sale'],
    specifications: {
      brand: 'CAT',
      model: '140M',
      year: 2020,
      hours: 1000,
      location: 'La Serena'
    }
  },
  {
    id: 7,
    name: 'Camión Tolva Mercedes-Benz Actros',
    description: 'Camión tolva para transporte de materiales',
    price: '$4.500.000 mensual',
    priceValue: 4500000,
    image: 'https://images.unsplash.com/photo-1614755868334-87f9d645d42d?q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Camiones',
    operationType: ['rent', 'sale'],
    specifications: {
      brand: 'Mercedes-Benz',
      model: 'Actros',
      year: 2018,
      hours: 2000,
      location: 'Valparaíso'
    }
  },
  {
    id: 8,
    name: 'Generador Eléctrico Cummins C22D5',
    description: 'Generador eléctrico diésel de 22 kVA',
    price: '$1.500.000 mensual',
    priceValue: 1500000,
    image: 'https://images.unsplash.com/photo-1611689222350-26d74d5d2440?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Generadores',
    operationType: ['rent'],
    specifications: {
      brand: 'Cummins',
      model: 'C22D5',
      year: 2021,
      hours: 200,
      location: 'Temuco'
    }
  },
  {
    id: 9,
    name: 'Plataforma Elevadora JLG 450AJ',
    description: 'Plataforma articulada para trabajo en altura',
    price: '$2.500.000 mensual',
    priceValue: 2500000,
    image: 'https://images.unsplash.com/photo-1673295239968-278997788f4e?q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Plataformas Elevadoras',
    operationType: ['sale'],
    specifications: {
      brand: 'JLG',
      model: '450AJ',
      year: 2019,
      hours: 600,
      location: 'Iquique'
    }
  },
  {
    id: 10,
    name: 'Manipulador Telescópico Manitou MT-X 1840',
    description: 'Manipulador telescópico para carga y descarga',
    price: '$3.500.000 mensual',
    priceValue: 3500000,
    image: 'https://images.unsplash.com/photo-1627483993875-f2d93f7595ee?q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Manipuladores Telescópicos',
    operationType: ['rent', 'sale'],
    specifications: {
      brand: 'Manitou',
      model: 'MT-X 1840',
      year: 2020,
      hours: 900,
      location: 'Puerto Montt'
    }
  },
    {
    id: 11,
    name: 'Excavadora Komatsu PC200-8',
    description: 'Excavadora hidráulica de alto rendimiento',
    price: 'Consultar precio',
    priceValue: 0,
    image: 'https://images.unsplash.com/photo-1585366119957-e977e594539e?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Excavadoras',
    operationType: ['sale'],
    specifications: {
      brand: 'Komatsu',
      model: 'PC200-8',
      year: 2015,
      hours: 4500,
      location: 'Santiago'
    }
  },
  {
    id: 12,
    name: 'Minicargador Bobcat S590',
    description: 'Minicargador compacto y versátil',
    price: 'Consultar precio',
    priceValue: 0,
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Cargadores',
    operationType: ['rent'],
    specifications: {
      brand: 'Bobcat',
      model: 'S590',
      year: 2017,
      hours: 2000,
      location: 'Valparaíso'
    }
  },
  {
    id: 13,
    name: 'Grúa Horquilla Eléctrica BYD ECB20',
    description: 'Grúa horquilla eléctrica para interiores',
    price: 'Consultar precio',
    priceValue: 0,
    image: 'https://images.unsplash.com/photo-1606753516772-d7636f0a692d?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Grúas Horquilla',
    operationType: ['sale'],
    specifications: {
      brand: 'BYD',
      model: 'ECB20',
      year: 2020,
      hours: 100,
      location: 'Concepción'
    }
  },
  {
    id: 14,
    name: 'Retroexcavadora CAT 420F2',
    description: 'Retroexcavadora potente y eficiente',
    price: 'Consultar precio',
    priceValue: 0,
    image: 'https://images.unsplash.com/photo-1625238992655-2773d0749d47?q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Retroexcavadoras',
    operationType: ['rent', 'sale'],
    specifications: {
      brand: 'CAT',
      model: '420F2',
      year: 2016,
      hours: 3500,
      location: 'Antofagasta'
    }
  },
  {
    id: 15,
    name: 'Rodillo Compactador HAMM HD 90',
    description: 'Rodillo compactador tándem articulado',
    price: 'Consultar precio',
    priceValue: 0,
    image: 'https://images.unsplash.com/photo-1636488873950-8592715bb962?q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Compactadores',
    operationType: ['rent'],
    specifications: {
      brand: 'HAMM',
      model: 'HD 90',
      year: 2018,
      hours: 1800,
      location: 'La Serena'
    }
  },
  {
    id: 16,
    name: 'Motoniveladora John Deere 670G',
    description: 'Motoniveladora de alta precisión',
    price: 'Consultar precio',
    priceValue: 0,
    image: 'https://images.unsplash.com/photo-1635561535643-809f4fe5d7f1?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Motoniveladoras',
    operationType: ['sale'],
    specifications: {
      brand: 'John Deere',
      model: '670G',
      year: 2014,
      hours: 5500,
      location: 'Viña del Mar'
    }
  },
  // Agrega más productos aquí...
];
