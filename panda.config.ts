import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
    ":root": {
        fontFamily: "{fonts.body}",
        fontSize: {
            base: "16px",
        },
        background: "{colors.background}",
        color: "{colors.text}",
        minWidth: "360px",
    },
    "*": {
        wordBreak: "keep-all",
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
                    backgroundLight: {
                        value: {
                            base: "{colors.neutral.200}",
                            _dark: "{colors.neutral.800}",
                        },
                    },
                    border: {
                        value: {
                            base: "{colors.neutral.600}",
                            _dark: "{colors.neutral.300}",
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
                            base: "{colors.slate.600}",
                            _dark: "{colors.white}",
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
