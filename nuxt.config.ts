import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts', 
    '@nuxt/scripts', 
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-compress'
  ],
  css: ['~/assets/css/main.css'],
  
  // Performance optimizations
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true
  },
  
  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif'],
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 64,
          height: 64,
          quality: 85
        }
      },
      project: {
        modifiers: {
          format: 'webp',
          quality: 85
        }
      }
    }
  },
  
  // Compression will be handled by nuxt-compress module
  
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  
  // Additional optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true
  },
})