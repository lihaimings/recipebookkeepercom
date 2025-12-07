addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const method = request.method;
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  try {
    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    let data;
    if (method === 'POST') {
      const body = await request.json();
      // Process the recipe data
      data = processRecipe(body);
    } else if (method === 'GET') {
      const category = url.searchParams.get('category');
      // Fetch recipes by category
      data = getRecipesByCategory(category);
    }

    return new Response(JSON.stringify(data), { status: 200, headers });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers });
  }
}

function processRecipe(recipe) {
  // Implement recipe processing logic
  return recipe;
}

function getRecipesByCategory(category) {
  // Implement category-based recipe fetching logic
  return [];
}