addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } })
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  }

  try {
    const body = await request.json()
    if (!body.ingredient || !body.fromUnit || !body.toUnit) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400, headers: corsHeaders })
    }

    // Perform conversion logic here
    // For example:
    const convertedMeasurement = convertMeasurement(body.ingredient, body.fromUnit, body.toUnit)

    return new Response(JSON.stringify({ result: convertedMeasurement }), { status: 200, headers: corsHeaders })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: corsHeaders })
  }
}

function convertMeasurement(ingredient, fromUnit, toUnit) {
  // Implement your conversion logic here
  // Example:
  if (fromUnit === 'teaspoon' && toUnit === 'tablespoon') {
    return ingredient / 3
  } else if (fromUnit === 'tablespoon' && toUnit === 'cup') {
    return ingredient / 16
  }
  // Add more conversion logic as needed
  throw new Error('Unsupported unit conversion')
}