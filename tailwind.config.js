module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "linear-gradient(359.88deg, #01003F -10.29%, #010026 9.3%, #040D70 66.59%, #001252 103.58%)",
        text: "linear-gradient(90deg, #005AFF 0%, #0757FF 9.3%, #1950FF 22.53%, #3845FF 38.12%, #6335FF 55.5%, #9A20FF 74.37%, #DB08FF 94.19%, #F000FF 100%);",
        button: "linear-gradient(90deg, #005AFF 0%, #0757FF 9.3%, #1950FF 22.53%, #3845FF 38.12%, #6335FF 55.5%, #9A20FF 74.37%, #DB08FF 94.19%, #F000FF 100%);",
        program: "linear-gradient(74.32deg, #0A0A4C -0.03%, #3845FF 54.11%, #F000FF 90.77%);"

      },
      colors: {
        "N100": "#00003C",
        "N90": "#3B546C",
        "N80": "#6D87A0",
        "N70": "#B0C4D8",
        "button-red": "#FF003D",
        "border": "linear-gradient(90deg, #005AFF 0%, #0757FF 9.3%, #1950FF 22.53%, #3845FF 38.12%, #6335FF 55.5%, #9A20FF 74.37%, #DB08FF 94.19%, #F000FF 100%);",
        "border-frist": "#005AFF",
        "border-second": "#F000FF",
        "CP1": "#559BFF",
        "footer": "#001033"
      },
      fontFamily: {
        prox: ["Proxima Nova", "sans-serif"],
      }
    },
  },
  plugins: [],
}
