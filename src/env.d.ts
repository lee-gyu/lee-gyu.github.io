/// <reference path="../.astro/types.d.ts" />

namespace globalThis {
    var LAST_UPDATED: string;
    var DEFAULT_BASE_URL: string;
}

interface ImportMetaEnv {
    readonly PUBLIC_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
