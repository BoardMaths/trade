import { defineConfig } from "vite";
import dns from "node:dns";
import react from "@vitejs/plugin-react";
import path from "path";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  optimizeDeps: {
    include: [".*"],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
