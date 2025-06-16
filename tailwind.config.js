module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // penting!
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#181E4B",
          "secondary": "#DF6951",
        },
      },
    ],
  },
}