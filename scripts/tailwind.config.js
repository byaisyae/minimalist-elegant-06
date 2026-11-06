/* Konfigurasi tema Tailwind (dimuat setelah cdn.tailwindcss.com). Ubah warna & font di sini. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Tema hitam / putih / abu-abu: cream = latar gelap, ink = teks terang, ac = aksen abu terang
        cream: { 50: "#080808", 100: "#0d0d0e", 200: "#141415", 300: "#262628" },
        ink: { 900: "#f5f5f5", 700: "#d4d4d4", 500: "#a3a3a3" },
        ac: { DEFAULT: "#e5e5e5", dark: "#a3a3a3" },
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        head: ['"Cormorant Garamond"', "serif"],
        serif: ['"Playfair Display"', "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
};
