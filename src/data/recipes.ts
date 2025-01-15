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
    name: "Brochetas de Frutas Arcoíris",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=2000",
    description: "Coloridas brochetas de frutas que encantan a los niños",
    ingredients: [
      { name: "Fresas", quantity: "200", unit: "g" },
      { name: "Uvas", quantity: "150", unit: "g" },
      { name: "Mandarina", quantity: "2", unit: "unidades" },
      { name: "Kiwi", quantity: "2", unit: "unidades" },
      { name: "Plátano", quantity: "2", unit: "unidades" }
    ]
  },
  {
    id: 2,
    name: "Sandwich Divertido de Pollito",
    image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&q=80&w=2000",
    description: "Sandwich integral con forma de pollito",
    ingredients: [
      { name: "Pan integral", quantity: "2", unit: "rebanadas" },
      { name: "Pechuga de pollo", quantity: "100", unit: "g" },
      { name: "Lechuga", quantity: "2", unit: "hojas" },
      { name: "Zanahoria", quantity: "1", unit: "unidad" },
      { name: "Queso bajo en grasa", quantity: "30", unit: "g" }
    ]
  },
  {
    id: 3,
    name: "Barquitos de Pepino",
    image: "https://images.unsplash.com/photo-1543339318-b43dc53e19b3?auto=format&fit=crop&q=80&w=2000",
    description: "Barquitos de pepino rellenos de atún y verduras",
    ingredients: [
      { name: "Pepino", quantity: "2", unit: "unidades" },
      { name: "Atún en agua", quantity: "100", unit: "g" },
      { name: "Tomate cherry", quantity: "8", unit: "unidades" },
      { name: "Maíz dulce", quantity: "50", unit: "g" },
      { name: "Yogur natural", quantity: "2", unit: "cucharadas" }
    ]
  },
  {
    id: 4,
    name: "Pizza Cara Feliz",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000",
    description: "Mini pizza integral con cara feliz de verduras",
    ingredients: [
      { name: "Base de pizza integral", quantity: "1", unit: "unidad" },
      { name: "Salsa de tomate", quantity: "4", unit: "cucharadas" },
      { name: "Queso mozzarella", quantity: "100", unit: "g" },
      { name: "Aceitunas", quantity: "4", unit: "unidades" },
      { name: "Pimiento", quantity: "1", unit: "unidad" }
    ]
  },
  {
    id: 5,
    name: "Batido de Superhéroe Verde",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=2000",
    description: "Batido nutritivo de frutas y espinacas",
    ingredients: [
      { name: "Espinacas", quantity: "50", unit: "g" },
      { name: "Plátano", quantity: "1", unit: "unidad" },
      { name: "Manzana verde", quantity: "1", unit: "unidad" },
      { name: "Leche de almendras", quantity: "250", unit: "ml" },
      { name: "Miel", quantity: "1", unit: "cucharada" }
    ]
  }
];