/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
type Runtime = import('@astrojs/cloudflare').Runtime<Env>

declare namespace App {
  interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly BUILD_ANALYZE: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
