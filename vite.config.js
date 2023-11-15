import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [
    VitePWA({
      strategies: 'injectManifest',
      injectRegister: "auto",
    }),
  ],
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        cleanupOutdatedCaches: false
      },
    }),
  ],
  plugins: [
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        start_url: "/",
        name: "Weather App",
        short_name: "Weather App",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        // scope: "/",

        icons: [
          {
            src: "maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "logo384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
