import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
    ":root": {
        fontFamily: "{fonts.body}",
        fontSize: "16px",
    },
});

export default defineConfig({
    globalCss,

    outdir: "./src/styled-system",
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        "./src/**/*.{js,jsx,ts,tsx,astro}",
        "./pages/**/*.{js,jsx,ts,tsx,astro}",
    ],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                colors: {},
                fonts: {
                    body: { value: "'Pretendard', 'system-ui', sans-serif" },
                },
            },
        },
    },

    // The output directory for your css system
});
