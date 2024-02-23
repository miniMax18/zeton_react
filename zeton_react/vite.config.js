
// https://vitejs.dev/config/
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
      //'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
    plugins: [react()],
  }
})
