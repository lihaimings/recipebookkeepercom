export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    const ingredient = searchParams.get('ingredient');
    const fromUnit = searchParams.get('fromUnit');
    const toUnit = searchParams.get('toUnit');

    if (!ingredient || !fromUnit || !toUnit) {
      return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
    }

    try {
      // Dummy conversion logic for demonstration
      let convertedValue;
      if (fromUnit === 'teaspoon' && toUnit === 'tablespoon') {
        convertedValue = ingredient * 3;
      } else if (fromUnit === 'tablespoon' && toUnit === 'cup') {
        convertedValue = ingredient / 16;
      } else {
        return new Response(JSON.stringify({ error: 'Unsupported conversion' }), { status: 400 });
      }

      return new Response(
        JSON.stringify({
          original: `${ingredient} ${fromUnit}(s)`,
          converted: `${convertedValue.toFixed(2)} ${toUnit}(s)`
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          status: 200
        }
      );
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
  }
};