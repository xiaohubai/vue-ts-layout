import { defineConfig, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env.VITE_BASE_NAME)
  return {
    base: env.VITE_BASE_NAME,
    resolve: {
      alias: {
        '@': __dirname + '/src',
        'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    server: {
      port: Number(env.VITE_WEB_PORT),
      proxy: {
        [env.VITE_SERVER_PREFIX_API]: {
          target: env.VITE_SERVER_API_URL,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp('^' + env.VITE_SERVER_PREFIX_API), '')
        }
      }
    },
    build: {
      //https://cn.vitejs.dev/config/build-options.html
      outDir: 'dist', // 产出目录
      chunkSizeWarningLimit: 2000
    },
    plugins: [
      vue(),
      vueSetupExtend(),
      viteMockServe({
        supportTs: true,
        mockPath: 'mock',
        localEnabled:Boolean( env.VITE_DEV_MOCK), // mock本地环境开关
        prodEnabled: Boolean(env.VITE_PROD_MOCK), // mock生产环境开关
        injectCode: `import { setupProdMockServer } from '../mock/mockProdServer'; setupProdMockServer()`, //injectFile默认是src/main.ts
        watchFiles: true,
        logger: false
      })
    ]
  }
})
