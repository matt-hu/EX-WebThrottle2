import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import GithubActionsReporter from 'vitest-github-actions-reporter'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.GH_BUILD ? '/EX-WebThrottle2/' : '/',
  test: {
    reporters: 
              process.env.GITHUB_ACTIONS
              ? ['default', new GithubActionsReporter()]
              // ? ['html']
              : ['default']
    
  }
})

// export default {
// //   plugins: [vue()],
// //   resolve: {
// //     alias: {
// //       '@': fileURLToPath(new URL('./src', import.meta.url))
// //     }
// //   },
// //   base: '/EX-WebThrottle2/',
//   test: {
//     reporters: process.env.GITHUB_ACTIONS
//       ? ['default', new GithubActionsReporter()]
//       : 'default'
//   }
// }
