addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const method = request.method;
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  if (method === 'OPTIONS') {
    return new Response(JSON.stringify({ message: 'Options request handled' }), { status: 204, headers });
  }

  try {
    if (method === 'GET') {
      const recipes = await getRecipes();
      return new Response(JSON.stringify(recipes), { status: 200, headers });
    } else if (method === 'POST') {
      const body = await request.json();
      const recipe = await createRecipe(body);
      return new Response(JSON.stringify(recipe), { status: 201, headers });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers });
  }

  return new Response(JSON.stringify({ message: 'Method Not Allowed' }), { status: 405, headers });
}

async function getRecipes() {
  // Simulate fetching recipes from a database
  return [
    { id: 1, name: 'Spaghetti Carbonara', ingredients: ['spaghetti', 'eggs', 'bacon'] },
    { id: 2, name: 'Caesar Salad', ingredients: ['lettuce', 'croutons', 'parmesan'] }
  ];
}

async function createRecipe(recipe) {
  // Simulate creating a recipe in a database
  const newId = Math.max(...getRecipes().map(r => r.id), 0) + 1;
  return { ...recipe, id: newId };
}