import { defineConfig } from 'vite';
import path from 'path';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import FullReload from 'vite-plugin-full-reload';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import injectHTML from 'vite-plugin-html-inject';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import viteImagemin from 'vite-plugin-imagemin';

const baseUrl = process.env.VITE_BASE_URL || '/';

export default defineConfig({
  base: baseUrl,
  build: {
    target: 'es2022',
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@partials': resolve(__dirname, 'src/html/html-partials'),
    },
  },

  server: {
    port: 3025,
    host: '0.0.0.0',
    hmr: true,
    allowedHosts: [''],
  },

  plugins: [
    injectHTML(),
    handlebars({
      reloadOnPartialChange: true,
      partialDirectory: resolve(__dirname, 'src/html/html-partials'),
      context: {
        baseUrl: 'baseUrl',
      },
    }),

    FullReload('src/html/html-partials/**/*', { delay: 0 }),

    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*',
          dest: 'assets',
        },
      ],
    }),

    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[name]', // будет id="icon-phone"
    }),

    viteImagemin({
      webp: {
        quality: 75, // настрой качество WebP
      },
      gifsicle: false,
      optipng: false,
      mozjpeg: false,
      svgo: false,
    }),
  ],
});
