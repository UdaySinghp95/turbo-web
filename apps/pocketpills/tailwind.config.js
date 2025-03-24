const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../packages/shared/tailwind.preset.js')], // Adjust path to shared package
  content: [
    join(__dirname, './src/**/*.{ts,tsx,html}'), // Current package
    join(__dirname, '../../packages/shared/**/*.{ts,tsx,html}'), // Shared package
  ],
  plugins: [],
};
