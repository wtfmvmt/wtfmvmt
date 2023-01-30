import { defineConfig } from "astro/config";

// https://astro.build/config

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap({
    canonicalURL: 'https://astrojs.com'
  }), prefetch(), mdx(), react()],
  output: "server",
  adapter: vercel(),
});
