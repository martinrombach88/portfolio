import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: mode === "production" ? "/martinrombach88.github.io/" : "/", // Replace with your repo name
});
