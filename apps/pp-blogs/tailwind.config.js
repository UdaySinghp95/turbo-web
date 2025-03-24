const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../packages/shared/tailwind.preset.js')], // Corrected shared path

  content: [
    join(__dirname, './src/**/*.{ts,tsx,html}'), // Current package (pp-blogs)
    join(__dirname, '../../packages/shared/**/*.{ts,tsx,html}'), // Shared package
  ],
  plugins: [],
};
