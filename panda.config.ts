import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
	":root": {
		fontSize: "16px",
		background: "{colors.background}",
		color: "{colors.text}",
	},
});

export default defineConfig({
	globalCss,
	// The output directory for your css system
	outdir: "./src/styled-system",

	conditions: {
		dark: ":root[data-theme='dark'] &",
	},

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: ["./src/styled-system/"],

	// Useful for theme customization
	theme: {
		breakpoints: {
			sm: "640px",
			lg: "1024px",
		},
		extend: {
			semanticTokens: {
				colors: {
					background: {
						value: { base: "{colors.gray.100}", _dark: "{colors.gray.950}" },
					},
					text: {
						value: { base: "{colors.gray.950}", _dark: "{colors.gray.100}" },
					},
				},
			},
			tokens: {
				colors: {},
				fonts: {
					body: { value: "'Pretendard', 'system-ui'" },
				},
			},
		},
	},
});
