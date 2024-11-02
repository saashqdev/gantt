import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'Gantt',
            fileName: 'saashq-gantt',
        },
        rollupOptions: {
            output: {
                format: 'cjs',
                assetFileNames: 'saashq-gantt[extname]',
                entryFileNames: 'saashq-gantt.[format].js'
            },
        },
    },
    output: { interop: 'auto' },
    server: { watch: { include: ['dist/*', 'src/*'] } }
});