module.exports = {
  ci: {
    collect: {
      // Configuration for collecting Lighthouse reports
      numberOfRuns: 3,
      url: ['http://localhost:3000/', 'http://localhost:3000/cardapio-facil'],
      settings: {
        // Use desktop config to test desktop performance
        preset: 'desktop',
        // Skip the Chrome extension check
        skipAudits: ['uses-http2'],
      },
    },
    upload: {
      // Upload reports to temporary public storage
      target: 'temporary-public-storage',
    },
    assert: {
      // Performance score thresholds
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        
        // Core Web Vitals thresholds
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        
        // Other important metrics
        'interactive': ['warn', { maxNumericValue: 3500 }],
        'server-response-time': ['warn', { maxNumericValue: 600 }],
        
        // Ensure proper image optimization
        'uses-optimized-images': 'error',
        'uses-webp-images': 'warn',
        
        // JavaScript and CSS optimization
        'unminified-javascript': 'error',
        'unminified-css': 'error',
        'unused-javascript': 'warn',
      },
    },
    budgets: {
      // Performance budgets
      performance: [
        {
          path: '/',
          resourceSizes: [
            {
              resourceType: 'document',
              budget: 20,
            },
            {
              resourceType: 'stylesheet',
              budget: 50,
            },
            {
              resourceType: 'font',
              budget: 100,
            },
            {
              resourceType: 'image',
              budget: 300,
            },
            {
              resourceType: 'script',
              budget: 300,
            },
          ],
          resourceCounts: [
            {
              resourceType: 'third-party',
              budget: 10,
            },
          ],
        },
      ],
    },
  },
};
