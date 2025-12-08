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

  if (method === 'OPTIONS') {
    return new Response(JSON.stringify({ message: 'CORS preflight' }), { headers, status: 204 });
  }

  try {
    if (method === 'POST') {
      const body = await request.json();
      // Handle recipe creation or update logic here
      return new Response(JSON.stringify({ message: 'Recipe created/updated successfully', data: body }), { headers, status: 201 });
    } else if (method === 'GET') {
      // Handle recipe retrieval logic here
      const recipes = [
        { id: 1, name: 'Spaghetti Carbonara', category: 'Pasta' },
        { id: 2, name: 'Chicken Alfredo', category: 'Pasta' }
      ];
      return new Response(JSON.stringify({ message: 'Recipes retrieved successfully', data: recipes }), { headers, status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { headers, status: 405 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), { headers, status: 500 });
  }
}