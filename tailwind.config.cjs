/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        gridTemplateColumns: {
          'agg': 'repeat(auto-fill, minmax(180px, 1fr))',
        }
      },
    }
  };