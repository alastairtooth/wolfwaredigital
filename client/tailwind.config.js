module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        pall1: "#000957",
        pall2: "#344CB7",
        pall3: "#577BC1",
        hlight: "#EBE645",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
