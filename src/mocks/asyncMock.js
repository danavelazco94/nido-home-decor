export const products = [
  // CERÁMICA
  {
    id: "01",
    name: "Florero artesanal",
    price: 12500,
    category: "Cerámica",
    img: "https://i.postimg.cc/XvW7RgBh/Florero-Artesanal.png",
    stock: 8,
    description:
      "Florero de cerámica artesanal, ideal para agregar calidez a tus espacios",
  },
  {
    id: "05",
    name: "Taza de cerámica",
    price: 7200,
    category: "Cerámica",
    img: "https://i.postimg.cc/rFWD7sYV/Taza-de-ceramica.png",
    stock: 10,
    description:
      "Taza de cerámica artesanal para disfrutar tus momentos favoritos",
  },
  {
    id: "06",
    name: "Bowl de cerámica",
    price: 8500,
    category: "Cerámica",
    img: "https://i.postimg.cc/fbhyg20j/06-bowl-ceramica.jpg",
    stock: 8,
    description:
      "Bowl de cerámica artesanal en tonos naturales, ideal para complementar tu mesa",
  },
  {
    id: "07",
    name: "Plato artesanal",
    price: 7800,
    category: "Cerámica",
    img: "https://i.postimg.cc/k4J472s2/07-plato-artesanal.jpg",
    stock: 10,
    description:
      "Plato artesanal de cerámica con acabado natural y diseño minimalista",
  },

  // TEXTILES
  {
    id: "02",
    name: "Almohadón de lino",
    price: 9000,
    category: "Textiles",
    img: "https://i.postimg.cc/ZRRZmsbN/Almohadon.png",
    stock: 12,
    description:
      "Almohadón de lino en tonos neutros, perfecto para crear ambientes acogedores",
  },
  {
    id: "08",
    name: "Manta tejida",
    price: 18500,
    category: "Textiles",
    img: "https://i.postimg.cc/rmfpsqZK/08-manta-tejida.jpg",
    stock: 7,
    description:
      "Manta tejida de textura suave, ideal para sumar calidez a tus espacios",
  },
  {
    id: "09",
    name: "Camino de mesa",
    price: 11500,
    category: "Textiles",
    img: "https://i.postimg.cc/wvwBM94k/09-camino-de-mesa.jpg",
    stock: 9,
    description:
      "Camino de mesa en tonos neutros para vestir tu comedor con sencillez",
  },
  {
    id: "10",
    name: "Funda de almohadón",
    price: 7500,
    category: "Textiles",
    img: "https://i.postimg.cc/d3DVTggp/10-funda-almohadon.jpg",
    stock: 12,
    description:
      "Funda de almohadón en tono natural, perfecta para renovar tus ambientes",
  },

  // AROMAS
  {
    id: "03",
    name: "Vela aromática",
    price: 6500,
    category: "Aromas",
    img: "https://i.postimg.cc/fySNt30y/Vela-Aromatica.png",
    stock: 15,
    description:
      "Vela aromática que aporta una fragancia suave y relajante al hogar",
  },
  {
    id: "11",
    name: "Difusor de ambiente",
    price: 10500,
    category: "Aromas",
    img: "https://i.postimg.cc/mkhgFK0h/11-difusor-ambiente.jpg",
    stock: 10,
    description:
      "Difusor de ambiente con varillas, ideal para perfumar tus espacios",
  },
  {
    id: "12",
    name: "Spray textil",
    price: 8900,
    category: "Aromas",
    img: "https://i.postimg.cc/hvwP8pBG/12-spray-textil.jpg",
    stock: 12,
    description:
      "Spray textil con aroma suave para renovar la frescura de tus ambientes",
  },
  {
    id: "13",
    name: "Sahumerios",
    price: 4500,
    category: "Aromas",
    img: "https://i.postimg.cc/ZYDRhKyM/13-sahumerios.jpg",
    stock: 20,
    description:
      "Sahumerios aromáticos para acompañar tus momentos de calma y relajación",
  },

  // DECORACIÓN
  {
    id: "04",
    name: "Bandeja de madera",
    price: 14500,
    category: "Decoración",
    img: "https://i.postimg.cc/kM26FfQX/Bandeja-de-madera.png",
    stock: 6,
    description: "Bandeja de madera natural, funcional y decorativa",
  },
  {
    id: "14",
    name: "Portavelas",
    price: 9500,
    category: "Decoración",
    img: "https://i.postimg.cc/NGPMwfHB/14-portavelas.jpg",
    stock: 8,
    description:
      "Portavelas de madera natural para crear rincones cálidos y acogedores",
  },
  {
    id: "15",
    name: "Cuadro decorativo",
    price: 12000,
    category: "Decoración",
    img: "https://i.postimg.cc/SN2KQF6R/15-cuadro-decorativo.jpg",
    stock: 5,
    description:
      "Cuadro decorativo con inspiración botánica y marco de madera natural",
  },
  {
    id: "16",
    name: "Espejo de pared",
    price: 22000,
    category: "Decoración",
    img: "https://i.postimg.cc/28b5jRQF/16-espejo-pared.jpg",
    stock: 4,
    description:
      "Espejo de pared con marco de madera, ideal para aportar luz y amplitud",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
