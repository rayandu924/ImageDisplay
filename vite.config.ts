import { defineConfig } from 'vite'
import { widgetPlugin } from '@mywallpaper/vite-plugin'

export default defineConfig({
  plugins: [widgetPlugin({ copyManifest: false })],
  build: {
    outDir: '.',
    emptyOutDir: false,
  },
})
