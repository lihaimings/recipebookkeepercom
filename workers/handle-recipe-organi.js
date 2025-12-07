export default {
  async fetch(request) {
    const { method } = request;
    
    if (method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    try {
      const body = await request.json();
      // Process the recipe organization and categorization logic here
      const response = {
        message: 'Recipe processed successfully',
        data: body
      };
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    } catch (error) {
      const errorResponse = {
        error: 'Internal Server Error',
        message: error.message
      };
      return new Response(JSON.stringify(errorResponse), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
};