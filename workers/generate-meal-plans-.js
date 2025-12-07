addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  }

  if (request.headers.get('Origin') !== null) {
    request = new Request(request.url, {
      headers: request.headers,
      method: request.method
    })
  }

  try {
    const body = await request.json()
    const mealPlan = generateMealPlan(body.recipes)
    return new Response(JSON.stringify(mealPlan), { status: 200, headers: corsHeaders })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400, headers: corsHeaders })
  }
}

function generateMealPlan(recipes) {
  // Placeholder for meal plan generation logic
  const mealPlan = recipes.map(recipe => ({
    name: recipe.name,
    ingredients: recipe.ingredients
  }))
  return mealPlan
}