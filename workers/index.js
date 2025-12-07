// API Router - recipe-bookkeeper
// Auto-generated entry point

import handle_recipe_organiHandler from './handle-recipe-organi.js';
import process_ingredient_mHandler from './process-ingredient-m.js';
import generate_meal_plans_Handler from './generate-meal-plans-.js';

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
  if (url.pathname === '/api/process-ingredient-m') return process_ingredient_mHandler.fetch(request, env);
  if (url.pathname === '/api/generate-meal-plans-') return generate_meal_plans_Handler.fetch(request, env);
    
    return new Response('Not Found', { status: 404 });
  }
};
