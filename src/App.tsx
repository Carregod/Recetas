import React, { useState } from 'react';
import { ChefHat, ShoppingBasket, ChevronDown, ChevronUp } from 'lucide-react';
import { Recipe, recipes } from './data/recipes';

function App() {
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [showTotals, setShowTotals] = useState(true);

  const toggleRecipe = (recipe: Recipe) => {
    if (selectedRecipes.find(r => r.id === recipe.id)) {
      setSelectedRecipes(selectedRecipes.filter(r => r.id !== recipe.id));
    } else if (selectedRecipes.length < 10) {
      setSelectedRecipes([...selectedRecipes, recipe]);
    }
  };

  const getAllIngredients = () => {
    const ingredients = new Map<string, { quantity: number; unit: string }>();
    
    selectedRecipes.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        const current = ingredients.get(ing.name);
        if (current) {
          ingredients.set(ing.name, {
            quantity: current.quantity + Number(ing.quantity),
            unit: ing.unit
          });
        } else {
          ingredients.set(ing.name, {
            quantity: Number(ing.quantity),
            unit: ing.unit
          });
        }
      });
    });

    return ingredients;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">Recetas Selectas</h1>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingBasket className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-medium">
                {selectedRecipes.length} / 10 recetas
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Recetas Disponibles</h2>
            <div className="space-y-4">
              {recipes.map(recipe => (
                <div
                  key={recipe.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-[1.02] ${
                    selectedRecipes.find(r => r.id === recipe.id)
                      ? 'ring-2 ring-orange-500'
                      : ''
                  }`}
                  onClick={() => toggleRecipe(recipe)}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{recipe.name}</h3>
                    <p className="text-gray-600 mt-1">{recipe.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Ingredientes Necesarios</h2>
            {selectedRecipes.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-500">
                  Selecciona algunas recetas para ver los ingredientes necesarios
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Lista de ingredientes por receta */}
                {selectedRecipes.map(recipe => (
                  <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-orange-600 mb-3">
                      {recipe.name}
                    </h3>
                    <ul className="space-y-2">
                      {recipe.ingredients.map(ing => (
                        <li
                          key={`${recipe.id}-${ing.name}`}
                          className="flex items-center justify-between py-2 border-b last:border-0"
                        >
                          <span className="font-medium">{ing.name}</span>
                          <span className="text-gray-600">
                            {ing.quantity} {ing.unit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Total de ingredientes */}
                <div className="bg-orange-50 rounded-lg shadow-md p-6">
                  <button
                    onClick={() => setShowTotals(!showTotals)}
                    className="w-full flex items-center justify-between text-lg font-semibold text-orange-800 mb-3"
                  >
                    <span>Total de Ingredientes</span>
                    {showTotals ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {showTotals && (
                    <ul className="space-y-2">
                      {Array.from(getAllIngredients()).map(([name, details]) => (
                        <li
                          key={name}
                          className="flex items-center justify-between py-2 border-b border-orange-200 last:border-0"
                        >
                          <span className="font-medium">{name}</span>
                          <span className="text-orange-800">
                            {details.quantity} {details.unit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;