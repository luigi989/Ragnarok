module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#603601',
        bgAccent: '#CC9544',
        textPrimary: '#1C0A00',
        textAccent: '#361500',
      },
    },
  },
  plugins: [require("daisyui")],
}