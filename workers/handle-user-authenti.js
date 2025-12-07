import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const method = request.method;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    });

    if (method === 'OPTIONS') {
      return new Response(JSON.stringify({ message: 'Options request received' }), { status: 204, headers });
    }

    try {
      if (method === 'POST') {
        const body = await request.json();
        const token = uuidv4();
        // Store the token and user data in a KV store or similar
        return new Response(JSON.stringify({ message: 'User authenticated', token }), { status: 201, headers });
      } else if (method === 'GET') {
        const token = url.searchParams.get('token');
        // Validate the token and retrieve user data from KV store or similar
        return new Response(JSON.stringify({ message: 'Session valid' }), { status: 200, headers });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
  }
};