import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  vite: {
    plugins: [
      tailwind(),
      Icons({ compiler: 'astro' }),
    ],
  },
})
