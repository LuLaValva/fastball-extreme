import { defineConfig } from "vite";
import marko from "@marko/run/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/routes/level.$id/levels/*",
          dest: "levels",
        },
      ],
    }),
    marko(),
  ],
});
