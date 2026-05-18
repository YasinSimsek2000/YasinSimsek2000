import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Replace 'your-username' and 'your-repo' with your GitHub username and repo name
  // If using a custom domain, set site to 'https://yourdomain.com' and remove base
  site: 'https://YasinSimsek2000.github.io',
  base: '/YasinSimsek2000/',
  output: 'static',
  integrations: [mdx()],
});
