import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import FullReload from 'vite-plugin-full-reload';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import injectHTML from 'vite-plugin-html-inject';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const baseUrl = env.VITE_BASE_URL || '/';
  const isBuild = mode === 'production';

  console.log('BASE URL:', baseUrl, 'IS BUILD:', isBuild);

  return {
    base: baseUrl,
    root: '.',
    publicDir: 'src/assets',
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
        entry: resolve(__dirname, 'index.html'),
        partialDirectory: resolve(__dirname, 'src/html/html-partials'),
        extensions: ['.handlebars', '.hbs', '.html'], // путь к partials
        reloadOnPartialChange: true, // для dev, можно оставить
        context: () => ({
          baseUrl,
          isBuild: mode === 'production',
        }),
      }),
      // handlebars({
      //   reloadOnPartialChange: true,
      //   partialDirectory: resolve(__dirname, 'src/html/html-partials'),
      //   context: {
      //     baseUrl,
      //     isBuild,
      //   },
      // }),

      FullReload('src/html/html-partials/**/*', { delay: 0 }),

      // viteStaticCopy({
      //   targets: [
      //     {
      //       src: 'src/assets/images/**/*',
      //       dest: 'images',
      //     },
      //   ],
      // }),

      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[name]', // будет id="icon-phone"
      }),
     isBuild &&
        viteImagemin({
          webp: {
            quality: 75,
          },
          gifsicle: false,
          optipng: false,
          mozjpeg: false,
          svgo: false,
        }),
    ].filter(Boolean), // фильтруем false, когда dev
  };
});
