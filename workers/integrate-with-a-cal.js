addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/calendar') {
    return handleCalendar(request);
  } else {
    return new Response(JSON.stringify({ error: 'Not Found' }), { status: 404 });
  }
}

async function handleCalendar(request) {
  try {
    const method = request.method;
    let response;

    if (method === 'GET') {
      // Fetch calendar data from the external API
      const calendarData = await fetch('https://api.example.com/calendar');
      response = await calendarData.json();
    } else if (method === 'POST') {
      // Handle POST request to update calendar
      const body = await request.json();
      // Logic to update calendar with new data
      response = { message: 'Calendar updated successfully' };
    } else {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
    }

    return new Response(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
      status: method === 'POST' ? 201 : 200
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};