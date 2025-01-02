import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react'; // Importa a integração do React

export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [
    tailwind(),
    compress(),
    react(), // Adiciona a integração do React
  ],
});
