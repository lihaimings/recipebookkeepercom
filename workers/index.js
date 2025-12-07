// API Router - recipe-bookkeeper
// Auto-generated entry point

import downloadHandler from './download.js';

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
  if (url.pathname === '/api/download') return downloadHandler.fetch(request, env);
    
    return new Response('Not Found', { status: 404 });
  }
};
