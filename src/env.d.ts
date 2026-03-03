/// <reference types="astro/client" />

namespace globalThis {
    var LAST_UPDATED: string;
    var DEFAULT_BASE_URL: string;
}

interface ImportMetaEnv {
    readonly PUBLIC_BASE_URL: string;
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly MODE: "development" | "production";
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
