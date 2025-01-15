interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
  ingredients: Ingredient[];
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Paella Valenciana",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=2000",
    description: "Tradicional plato español de arroz con azafrán y mariscos",
    ingredients: [
      { name: "Arroz", quantity: "400", unit: "g" },
      { name: "Camarones", quantity: "250", unit: "g" },
      { name: "Mejillones", quantity: "200", unit: "g" },
      { name: "Azafrán", quantity: "2", unit: "g" },
      { name: "Pimiento rojo", quantity: "1", unit: "unidad" }
    ]
  },
  {
    id: 2,
    name: "Tacos al Pastor",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=2000",
    description: "Deliciosos tacos mexicanos de cerdo marinado",
    ingredients: [
      { name: "Carne de cerdo", quantity: "500", unit: "g" },
      { name: "Piña", quantity: "1", unit: "unidad" },
      { name: "Tortillas", quantity: "12", unit: "unidades" },
      { name: "Cilantro", quantity: "1", unit: "manojo" }
    ]
  },
  {
    id: 3,
    name: "Ceviche Peruano",
    image: "https://images.unsplash.com/photo-1599789197514-47270cd526b4?auto=format&fit=crop&q=80&w=2000",
    description: "Pescado fresco marinado en limón con ají",
    ingredients: [
      { name: "Pescado blanco", quantity: "500", unit: "g" },
      { name: "Limón", quantity: "8", unit: "unidades" },
      { name: "Cebolla morada", quantity: "1", unit: "unidad" },
      { name: "Ají", quantity: "2", unit: "unidades" }
    ]
  },
  {
    id: 4,
    name: "Lasaña Italiana",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=2000",
    description: "Clásica lasaña con capas de pasta, carne y salsa bechamel",
    ingredients: [
      { name: "Pasta para lasaña", quantity: "500", unit: "g" },
      { name: "Carne molida", quantity: "400", unit: "g" },
      { name: "Queso mozzarella", quantity: "300", unit: "g" },
      { name: "Salsa de tomate", quantity: "500", unit: "ml" },
      { name: "Leche", quantity: "500", unit: "ml" },
      { name: "Harina", quantity: "50", unit: "g" }
    ]
  },
  {
    id: 5,
    name: "Sushi Roll California",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=2000",
    description: "Roll de sushi con aguacate, pepino y cangrejo",
    ingredients: [
      { name: "Arroz para sushi", quantity: "300", unit: "g" },
      { name: "Alga nori", quantity: "4", unit: "hojas" },
      { name: "Aguacate", quantity: "2", unit: "unidades" },
      { name: "Pepino", quantity: "1", unit: "unidad" },
      { name: "Palitos de cangrejo", quantity: "200", unit: "g" },
      { name: "Ajonjolí", quantity: "30", unit: "g" }
    ]
  }
];