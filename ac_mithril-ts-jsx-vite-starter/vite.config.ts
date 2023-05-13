import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  server: {
    port: 8080,
  },
  build: {
    outDir: "../build",
  },

  // Uncomment to use JSX:
  esbuild: {
    jsx: "transform",
    jsxFactory: "m",
    jsxFragment: "'['",
  },
});
