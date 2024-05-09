/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#ffffff",
        navBgColor: "#1f2937",
        navTextColor: "#d1d5db",
        btnBgColor: "#312e81",
        tableHeaderColor: "#e5e7eb",
        grayText: "#5a6370",
        tableRowOddColor: "#e5e7eb",
        tableRowColor: "#f3f4f6",
        divideColor: "#939df9",
        tableDivideColor: "#f19c9d",
        borderColor: "#8e949e",
      },
    },
  },
  plugins: [],
};
