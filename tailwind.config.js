const shadowOutlineColors = require('tailwindcss-shadow-outline-colors');
module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.html'],
  theme: {
    extend: {
    backgroundColor: {
    'custom-color': '#03314b',
    },
    },
    },
    plugins: [shadowOutlineColors],
};
