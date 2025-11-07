<script setup>
import { Analytics } from '@vercel/analytics/nuxt'

// SEO Meta Tags
useHead({
  title: 'Milan Gorislavets - Full Stack Developer & CEO @ CatOps',
  meta: [
    { name: 'description', content: 'Portfolio of Milan Gorislavets, #1 Peerlist Hunter, Collaborator & CEO @ CatOps. Full-stack developer specializing in Vue.js, Nuxt.js, Laravel, and modern web technologies.' },
    { name: 'keywords', content: 'Milan Gorislavets, Full Stack Developer, Vue.js, Nuxt.js, Laravel, PHP, JavaScript, TypeScript, CatOps, Peerlist Hunter' },
    { name: 'author', content: 'Milan Gorislavets' },
    { property: 'og:title', content: 'Milan Gorislavets - Full Stack Developer' },
    { property: 'og:description', content: 'Portfolio of Milan Gorislavets, #1 Peerlist Hunter, Collaborator & CEO @ CatOps' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://milan.su' },
    { property: 'og:image', content: 'https://milan.su/milan.jpeg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@MGorislavets' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ffffff' }
  ],
  link: [
    { rel: 'canonical', href: 'https://milan.su' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <Analytics/>
  </NuxtLayout>
</template>
