/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#E2B478",
        secondary: "#54595F",
        textColor: "#7A7A7A",
      },
      backgroundImage: {
        anotherHeroImage: "url('/qube-demo2-main-banner.jpg')",
        homepagesectionBG: "url('/homepagesectionBG.jpeg')",
      },
    },
  },
  plugins: [],
};
