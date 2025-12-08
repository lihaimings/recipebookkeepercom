import math from 'mathjs';

export default {
  async fetch(request) {
    const { method } = request;
    
    if (method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        status: 204
      });
    }

    if (method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 405
      });
    }

    try {
      const { input, fromUnit, toUnit } = await request.json();
      if (!input || !fromUnit || !toUnit) {
        throw new Error('Missing required parameters');
      }
      const result = math.unit(input, fromUnit).to(toUnit);
      return new Response(JSON.stringify({ result }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400
      });
    }
  }
};