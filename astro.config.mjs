import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    outDir: "./dist",
    base: "/",
    integrations: [tailwind(), react(), mdx(), svelte()],
    vite: {},
});
