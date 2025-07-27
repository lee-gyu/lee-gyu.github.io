import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    outDir: "./dist",
    base: "/",
    i18n: {
        locales: ["en", "ko"],
        defaultLocale: "ko",
    },
    integrations: [mdx(), solidJs()],
    vite: {
        plugins: [],
        css: {
            modules: {
                generateScopedName: "__[local]",
            },
        },
    },
});
