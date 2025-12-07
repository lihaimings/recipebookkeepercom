// API Router - recipe-bookkeeper
// Auto-generated entry point

import handle_user_authentiHandler from './handle-user-authenti.js';
import provide_an_api_for_aHandler from './provide-an-api-for-a.js';
import convert_ingredient_mHandler from './convert-ingredient-m.js';
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
  if (url.pathname === '/api/handle-user-authenti') return handle_user_authentiHandler.fetch(request, env);
  if (url.pathname === '/api/provide-an-api-for-a') return provide_an_api_for_aHandler.fetch(request, env);
  if (url.pathname === '/api/convert-ingredient-m') return convert_ingredient_mHandler.fetch(request, env);
  if (url.pathname === '/api/generate-meal-plans-') return generate_meal_plans_Handler.fetch(request, env);
    
    return new Response('Not Found', { status: 404 });
  }
};
