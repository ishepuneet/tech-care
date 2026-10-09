/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: { colors: { ink: "#071f2a", navy: "#0c3443", teal: "#0d6670", mint: "#b8e0d6", fog: "#f4f7f7" }, boxShadow: { soft: "0 24px 70px rgba(7,31,42,.12)" } } },
  plugins: [],
};