import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    outDir: "./dist",
    base: "/",
    integrations: [mdx(), solidJs()],
    i18n: {
        locales: ["ko", "en"],
        defaultLocale: "ko",
    },
    vite: {
        plugins: [],
        css: {
            modules: {
                generateScopedName: "__[local]",
            },
        },
    },
});
