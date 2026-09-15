import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://julieta-quince.vercel.app',
  integrations: [tailwind()]
});