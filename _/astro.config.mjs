import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), sitemap({
    canonicalURL: 'https://astrojs.com'
  }), prefetch(), mdx(), react()],
  output: "static",
});
