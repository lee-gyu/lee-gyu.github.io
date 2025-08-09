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
        lineHeight: "1.5",
    },
    "*": {
        transition: "background-color 0.2s ease-in-out",
    },
    "*::selection": {
        backgroundColor: "{colors.primaryActive}",
        color: "{colors.primary}",
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
                spacing: {
                    docPadLeft: {
                        value: {
                            base: "1.5rem",
                            sm: "2.5rem",
                        },
                    },
                    docPadRight: { value: "1rem" },
                    docPadTop: { value: "0rem" },
                    docPadBottom: { value: "1rem" },
                },
                colors: {
                    background: {
                        value: {
                            base: "{colors.neutral.200}",
                            _dark: "{colors.neutral.950}",
                        },
                    },
                    backgroundLight: {
                        value: {
                            base: "{colors.neutral.50}",
                            _dark: "{colors.neutral.800}",
                        },
                    },
                    borderColor: {
                        value: {
                            base: "{colors.neutral.400/80}",
                            _dark: "{colors.neutral.100/80}",
                        },
                    },
                    surfaceLight: {
                        value: {
                            base: "{colors.neutral.50/60}",
                            _dark: "{colors.neutral.800/60}",
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
                    textLight: {
                        value: {
                            base: "{colors.neutral.900/80}",
                            _dark: "{colors.neutral.100/80}",
                        },
                    },
                    textLink: {
                        value: {
                            base: "{colors.neutral.900}",
                            _dark: "{colors.neutral.100}",
                        },
                    },
                    accent: {
                        value: {
                            base: "{colors.neutral.400}",
                            _dark: "{colors.neutral.200}",
                        },
                    },
                    accentO10: {
                        value: {
                            base: "{colors.neutral.400/10}",
                            _dark: "{colors.neutral.200/10}",
                        },
                    },
                    accentO20: {
                        value: {
                            base: "{colors.neutral.400/20}",
                            _dark: "{colors.neutral.200/20}",
                        },
                    },
                    accentO30: {
                        value: {
                            base: "{colors.neutral.400/30}",
                            _dark: "{colors.neutral.200/30}",
                        },
                    },
                    accentO50: {
                        value: {
                            base: "{colors.neutral.400/50}",
                            _dark: "{colors.neutral.200/50}",
                        },
                    },
                    accentO80: {
                        value: {
                            base: "{colors.neutral.400/80}",
                            _dark: "{colors.neutral.200/80}",
                        },
                    },
                    accentContent: {
                        value: {
                            base: "{colors.neutral.200}",
                            _dark: "{colors.neutral.400}",
                        },
                    },
                    primary: {
                        value: {
                            base: "{colors.zinc.50}",
                            _dark: "{colors.zinc.950}",
                        },
                    },
                    primaryActive: {
                        value: {
                            base: "{colors.zinc.950}",
                            _dark: "{colors.zinc.50}",
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
