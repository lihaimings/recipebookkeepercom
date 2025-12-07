import { fetch } from 'node-fetch';

const recipes = new Map();

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const method = request.method;
    const path = url.pathname.split('/').filter(Boolean);

    try {
      switch (method) {
        case 'GET':
          if (path.length === 1) {
            return new Response(JSON.stringify([...recipes]), { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
          } else if (path.length === 2) {
            const recipe = recipes.get(path[1]);
            if (recipe) {
              return new Response(JSON.stringify(recipe), { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
            } else {
              return new Response('Recipe not found', { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } });
            }
          }
          break;
        case 'POST':
          if (path.length === 1) {
            const body = await request.json();
            recipes.set(body.id, body);
            return new Response(JSON.stringify({ message: 'Recipe added' }), { status: 201, headers: { 'Access-Control-Allow-Origin': '*' } });
          }
          break;
        case 'DELETE':
          if (path.length === 2) {
            const recipe = recipes.get(path[1]);
            if (recipe) {
              recipes.delete(path[1]);
              return new Response(JSON.stringify({ message: 'Recipe deleted' }), { headers: { 'Access-Control-Allow-Origin': '*' } });
            } else {
              return new Response('Recipe not found', { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } });
            }
          }
          break;
        default:
          return new Response('Method not allowed', { status: 405, headers: { 'Access-Control-Allow-Origin': '*', 'Allow': 'GET, POST, DELETE' } });
      }
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } });
    }

    return new Response('Not found', { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } });
  }
};