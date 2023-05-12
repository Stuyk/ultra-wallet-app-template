import { PluginOption, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import SSL from '@vitejs/plugin-basic-ssl';

/**
 * Add any plugins that are shared with Dev & Production Mode Here
 * @type {*} */
const defaultPlugins = [vue()];

/**
 * Used to check if the flag --dev has been passed through the startup process.
 *
 * @return {boolean}
 */
function isDev(): boolean {
    const args = process.argv;
    return typeof args.find((x) => x.includes('--dev')) !== 'undefined';
}

/**
 * Build plugin list for development mode, and production mode.
 *
 * @return {PluginOption[]}
 */
function buildPluginList(): PluginOption[] {
    return isDev() ? [...defaultPlugins, SSL()] : defaultPlugins;
}

export default defineConfig({
    plugins: buildPluginList(),
    server: {
        host: 'localhost',
        https: true,
        port: 3000,
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});
