import { loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: './',
    root: './',
    resolve: {
      alias: {
        '@': __dirname + '/src',
        'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    server: {
      port: env.VITE_WEB_PORT,
      proxy: {
        [env.VITE_SERVER_PREFIX_API]: {
          target: env.VITE_SERVER_API_URL,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp('^' + env.VITE_SERVER_PREFIX_API), '')
        }
      }
    },
    build: {
      target: 'es2017',
      minify: 'terser',// 是否进行压缩
      manifest: false, // 是否产出maifest.json
      sourcemap: false, // 是否产出soucemap.json
      outDir: 'dist' // 产出目录
    },

    plugins: [
      vue(),
      vueSetupExtend(),
      viteMockServe({
        supportTs: true,
        mockPath: 'mock',
        localEnabled: (env.VITE_MOCK === 'true' ? true : false), // mock开关
        watchFiles: true, // 监视文件更改
        logger: true
      })
    ]
  }
}
