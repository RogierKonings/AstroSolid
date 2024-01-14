import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), svelte()]
});