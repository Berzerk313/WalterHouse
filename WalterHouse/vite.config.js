import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import FullReload from 'vite-plugin-full-reload';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    build: {
        target: 'es2022',
        outDir: 'build',
    },
    base: 'WalterHouse',

    server: {
        port: 3025,
        host: '0.0.0.0',
        hmr: true,
    },
    plugins: [
        injectHTML(),
        handlebars({
            reloadOnPartialChange: true,
            partialDirectory: resolve(__dirname, 'src/html'),
        }),

        FullReload('src/html/**/*', { delay: 0 }),

    ],
});
