const products = [
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
    id: "04",
    name: "Bandeja de madera",
    price: 14500,
    category: "Decoración",
    img: "https://i.postimg.cc/kM26FfQX/Bandeja-de-madera.png",
    stock: 6,
    description: "Bandeja de madera natural, funcional y decorativa",
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
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
