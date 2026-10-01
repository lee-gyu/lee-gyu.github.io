import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";

const LAST_UPDATED = new Date().toUTCString();

// https://astro.build/config
export default defineConfig({
    outDir: "./dist",
    base: "/",
    compressHTML: true,
    site: "https://lee-gyu.github.io",
    i18n: {
        locales: ["en", "ko"],
        defaultLocale: "ko",
    },
    integrations: [
        solidJs(),
        starlight({
            title: "lee-gyu",
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lee-gyu' }],
			sidebar: [
				{
					label: 'Home',
					items: [{ autogenerate: { directory: 'docs/' } }],
				},
			],
        })
    ],
    devToolbar: {
        enabled: false,
    },
    vite: {
        plugins: [],
        css: {
            modules: {
                generateScopedName: "__[local]",
            },
        },
        define: {
            LAST_UPDATED: `"${LAST_UPDATED}"`,
            DEFAULT_BASE_URL: `"https://lee-gyu.github.io"`,
        },
    },
});