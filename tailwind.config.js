module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      bgPrimary: '#603601',
      bgAccent: '#CC9544',
      textPrimary: '#1C0A00',
      textAccent: '#361500',
    },
    extend: {
    },
  },
  plugins: [require("daisyui")],
}