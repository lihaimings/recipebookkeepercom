addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/meal-plan' && request.method === 'POST') {
    try {
      const body = await request.json();
      const mealPlan = generateMealPlan(body.recipes);
      return new Response(JSON.stringify(mealPlan), { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }
  }

  if (path === '/grocery-list' && request.method === 'POST') {
    try {
      const body = await request.json();
      const groceryList = generateGroceryList(body.recipes);
      return new Response(JSON.stringify(groceryList), { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }
  }

  return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
}

function generateMealPlan(recipes) {
  // Implement meal plan generation logic here
  return { meals: recipes.map(recipe => ({ name: recipe.name, time: recipe.time })) };
}

function generateGroceryList(recipes) {
  // Implement grocery list generation logic here
  const ingredients = new Set();
  recipes.forEach(recipe => recipe.ingredients.forEach(ingredient => ingredients.add(ingredient)));
  return { items: Array.from(ingredients) };
}