import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
    ":root": {
        fontFamily: "{fonts.body}",
        fontSize: {
            base: "14px",
            sm: "16px",
            lg: "18px",
        },
        background: "{colors.background}",
        color: "{colors.text}",
    },
});

export default defineConfig({
    globalCss,

    conditions: {
        dark: "[data-theme='dark'] &",
    },

    // The output directory for your css system
    outdir: "./src/styled-system",

    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            semanticTokens: {
                colors: {
                    background: {
                        value: {
                            base: "{colors.neutral.100}",
                            _dark: "{colors.neutral.950}",
                        },
                    },
                    text: {
                        value: {
                            base: "{colors.neutral.900}",
                            _dark: "{colors.neutral.100}",
                        },
                    },
                    accent: {
                        value: {
                            base: "{colors.neutral.300}",
                            _dark: "{colors.neutral.600}",
                        },
                    },
                },
            },
            tokens: {
                colors: {},
                fonts: {
                    body: { value: "'Pretendard', 'system-ui', sans-serif" },
                },
            },
        },
    },
});
