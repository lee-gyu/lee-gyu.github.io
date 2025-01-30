import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
    outDir: "./dist",
    base: "/",
    integrations: [tailwind(), react(), mdx(), svelte()],
    vite: {
        plugins: [],
    },
});
