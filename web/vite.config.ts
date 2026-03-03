import { defineConfig, type PluginOption, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import svgr from 'vite-plugin-svgr';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig(({ mode }): UserConfig => {
  const plugins: PluginOption[] = [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11', 'not op_mini all'],
    }),
    svgr(),
    ViteImageOptimizer({
      exclude: /\.raw\.(png|jpe?g|gif|webp|svg)$/,
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
      gif: {},
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeDimensions', active: true },
        ],
      },
    }),
  ];

  if (mode === 'production') {
    plugins.push(
      obfuscator({
        options: {
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          debugProtection: false,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          numbersToExpressions: false,
          renameGlobals: false,
          selfDefending: false,
          simplify: true,
          splitStrings: false,
          stringArray: true,
          stringArrayCallsTransform: false,
          stringArrayEncoding: [],
          stringArrayIndexShift: true,
          stringArrayRotate: true,
          stringArrayShuffle: true,
          stringArrayWrappersCount: 1,
          stringArrayWrappersChainedCalls: true,
          stringArrayWrappersParametersMaxCount: 2,
          stringArrayWrappersType: 'variable',
          stringArrayThreshold: 0.75,
          unicodeEscapeSequence: false,
        },
      }),
    );
  }

  return {
    plugins,
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});
