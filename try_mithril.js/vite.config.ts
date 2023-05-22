import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  server: {
    port: 8080,
  },
  publicDir: "../public",
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },

  // Uncomment to use JSX:
  // esbuild: {
  //   jsx: "transform",
  //   jsxFactory: "m",
  //   jsxFragment: "'['",
  // },
});
