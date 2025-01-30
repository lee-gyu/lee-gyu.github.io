import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    outDir: "./dist",
    base: "/",
    integrations: [react(), mdx(), svelte()],
    vite: {
        plugins: [tailwindcss()],
    },
});
