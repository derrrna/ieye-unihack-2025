// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',  // Adjust this path as per your project structure
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
  };
  