addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { method } = request

  if (method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    })
  }

  try {
    const body = await request.json()
    const { from, to, value } = body

    if (!from || !to || typeof value !== 'number') {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      })
    }

    const convertedValue = convertMeasurement(from, to, value)

    if (convertedValue === null) {
      return new Response(JSON.stringify({ error: 'Conversion not supported' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      })
    }

    return new Response(JSON.stringify({ result: convertedValue }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    })

  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    })
  }
}

function convertMeasurement(from, to, value) {
  // Add your conversion logic here
  // Example:
  if (from === 'teaspoon' && to === 'tablespoon') {
    return value / 3
  } else if (from === 'tablespoon' && to === 'cup') {
    return value / 16
  }
  // Add more conversions as needed
  return null
}