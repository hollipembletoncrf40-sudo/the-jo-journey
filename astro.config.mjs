import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://your-blog.vercel.app',
  output: 'static', // Astro 5.x 静态模式（支持按需 SSR）
  adapter: vercel(),
  integrations: [
    UnoCSS({ injectReset: true }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
