import { defineConfig } from 'astro/config';

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind(), sitemap(), prefetch(), partytown(), mdx(), image()],
  output: "server",
  adapter: vercel()
});