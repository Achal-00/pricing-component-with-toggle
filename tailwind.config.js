/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.8rem, min(1.5dvw, 1.5dvh), 8rem)",
      },
      fontFamily: {
        "main-font": ["Montserrat", "sans-serif"],
      },
      colors: {
        "gradient-from": "hsl(236, 72%, 79%)",
        "gradient-to": "hsl(237, 63%, 64%)",
        "very-light-greyish-blue": "hsl(240, 78%, 98%)",
        "light-greyish-blue": "hsl(234, 14%, 74%)",
        "greyish-blue": "hsl(233, 13%, 49%)",
        "dark-greyish-blue": "hsl(232, 13%, 33%)",
      },
    },
  },
  plugins: [],
};
