// API Router - recipe-bookkeeper
// Auto-generated entry point

import handle_recipe_organiHandler from './handle-recipe-organi.js';
import perform_automatic_inHandler from './perform-automatic-in.js';
import create_meal_plans_anHandler from './create-meal-plans-an.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
    
    // Route to handlers
  if (url.pathname === '/api/handle-recipe-organi') return handle_recipe_organiHandler.fetch(request, env);
  if (url.pathname === '/api/perform-automatic-in') return perform_automatic_inHandler.fetch(request, env);
  if (url.pathname === '/api/create-meal-plans-an') return create_meal_plans_anHandler.fetch(request, env);
    
    return new Response('Not Found', { status: 404 });
  }
};
