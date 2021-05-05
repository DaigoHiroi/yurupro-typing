module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
    'postcss-preset-env',
    {
    autoprefixer: {
      flexbos: 'no-2009'
    },
    stage: 3,
    features: {
      'custom-properties':false
    }
    }
  ]
  ],
}
