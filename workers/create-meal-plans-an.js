addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/meal-plans' && request.method === 'POST') {
    return createMealPlan(request);
  } else if (path === '/grocery-lists' && request.method === 'GET') {
    return generateGroceryList(request);
  } else {
    return new Response('Not Found', { status: 404 });
  }
}

async function createMealPlan(request) {
  try {
    const data = await request.json();
    // Logic to create meal plan
    const response = { message: 'Meal plan created successfully' };
    return new Response(JSON.stringify(response), { headers: { 'Content-Type': 'application/json', ...corsHeaders } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400, headers: corsHeaders });
  }
}

async function generateGroceryList(request) {
  try {
    const data = await request.json();
    // Logic to generate grocery list
    const response = { items: ['item1', 'item2'] };
    return new Response(JSON.stringify(response), { headers: { 'Content-Type': 'application/json', ...corsHeaders } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400, headers: corsHeaders });
  }
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};