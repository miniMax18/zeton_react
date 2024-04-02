// https://vitejs.dev/config/
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: './',
    plugins: [react()],
    define: {
      // 'process.env.YOUR_STRING_VARIABLE': JSON.stringify(env.YOUR_STRING_VARIABLE),
      // 'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
      // If you want to exposes all env variables, which is not recommended
      //'process.env.REACT_APP_MOCK': //JSON.stringify(env.REACT_APP_MOCK),
      //'process.env.REACT_APP_MOCK': env.REACT_APP_MOCK,
      'process.env': env,
      //'meta': import.meta.env
      //'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
 //   server: {
 //     port: 3000,
 //     strictPort: true,
 //     host: true,
 //     origin: "http://0.0.0.0:3000",
 //}
  }
})