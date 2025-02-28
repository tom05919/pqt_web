module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {}
    },
    plugins: []
  };
  
  // vercel.json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  