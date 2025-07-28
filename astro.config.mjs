import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

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
        server: {
            allowedHosts: [env.ALLOWED_HOST_LIST],
        },
    },
});
