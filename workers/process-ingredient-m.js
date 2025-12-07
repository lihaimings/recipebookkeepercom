export default {
  async fetch(request) {
    const url = new URL(request.url);
    const ingredient = url.searchParams.get('ingredient');
    const fromUnit = url.searchParams.get('fromUnit');
    const toUnit = url.searchParams.get('toUnit');

    if (!ingredient || !fromUnit || !toUnit) {
      return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
    }

    try {
      // Placeholder for conversion logic
      let convertedValue;
      switch (ingredient) {
        case 'water':
          if (fromUnit === 'ml' && toUnit === 'cup') {
            convertedValue = ingredient / 236.588;
          } else if (fromUnit === 'cup' && toUnit === 'ml') {
            convertedValue = ingredient * 236.588;
          }
          break;
        default:
          return new Response(JSON.stringify({ error: 'Unsupported ingredient' }), { status: 400 });
      }

      if (!convertedValue) {
        return new Response(JSON.stringify({ error: 'Invalid unit conversion' }), { status: 400 });
      }

      const response = {
        ingredient,
        fromUnit,
        toUnit,
        convertedValue
      };

      return new Response(JSON.stringify(response), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        status: 200
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
  }
};