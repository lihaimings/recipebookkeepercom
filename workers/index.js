// API Router - recipe-bookkeeper
// Auto-generated entry point

import handle_recipe_organiHandler from './handle-recipe-organi.js';
import automate_ingredient_Handler from './automate-ingredient-.js';
import integrate_with_a_calHandler from './integrate-with-a-cal.js';

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
  if (url.pathname === '/api/automate-ingredient-') return automate_ingredient_Handler.fetch(request, env);
  if (url.pathname === '/api/integrate-with-a-cal') return integrate_with_a_calHandler.fetch(request, env);
    
    return new Response('Not Found', { status: 404 });
  }
};
