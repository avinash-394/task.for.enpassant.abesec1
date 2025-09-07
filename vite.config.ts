import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import ViteSitemap from "vite-plugin-sitemap"; // ✅ default import, not named

export default defineConfig({
  base: "/", // required for deployment
  plugins: [
    react(),
    ViteSitemap({
      hostname: 'https://en-passant-forum.netlify.app/',
      routes: [
        { path: '/', changefreq: 'daily', priority: 1.0 },
        { path: '/team', changefreq: 'monthly', priority: 0.7 },
        
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
