import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl'

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://brandev.netlify.app',
  integrations: [mdx(), sitemap(), tailwind(), icon()],  
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});