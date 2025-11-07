<script setup>
const projects = [
    {
        id: 1,
        name: 'CatOps',
        period: 'ACTIVE',
        githubUrl: 'https://github.com/mfhonley/catops',
        websiteUrl: 'https://catops.io/',
        image: '/catops.png'
    },
    {
        id: 2,
        name: 'AdiletAI',
        period: 'ACTIVE',
        websiteUrl: 'https://zakon-chi.vercel.app/',
        image: '/adilet.png'
    },
    {
        id: 3,
        name: 'SereneAI',
        period: 'INACTIVE',
        websiteUrl: 'https://github.com/themilan1337/serene.ws',
        image: '/serene.jpeg'
    }
]
</script>

<template>
    <main>
        <div class="max-w-lg mt-8 sm:mt-12 px-4 sm:px-6 mx-auto flex flex-col">
            <div class="header text-left text-zinc-700">
                <div 
                    class="flex -space-x-6"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 600, delay: 100 } }"
                >
                    <NuxtImg src="/milan.jpeg" class="rounded-full mb-4 h-12 w-12 sm:h-16 sm:w-16 border-2 sm:border-4 object-cover border-zinc-200" alt="Milan Gorislavets" loading="eager" priority></NuxtImg>
                    <NuxtImg src="/1.jpg" class="rounded-full object-cover mb-4 h-12 w-12 sm:h-16 sm:w-16 border-2 sm:border-4 border-zinc-200" alt="" loading="lazy"></NuxtImg>
                    <NuxtImg src="/4.jpeg" class="rounded-full object-cover mb-4 h-12 w-12 sm:h-16 sm:w-16 border-2 sm:border-4 border-zinc-200" alt="" loading="lazy"></NuxtImg>
                    <NuxtImg src="/2.jpg" class="rounded-full object-cover mb-4 h-12 w-12 sm:h-16 sm:w-16 border-2 sm:border-4 border-zinc-200" alt="" loading="lazy"></NuxtImg>
                </div>
                <h1 
                     class="text-2xl sm:text-3xl font-bold serif"
                     v-motion
                     :initial="{ opacity: 0 }"
                     :enter="{ opacity: 1, transition: { duration: 600, delay: 200 } }"
                 >Milan Gorislavets.</h1>
                <p 
                    class="text-zinc-600 flex flex-col sm:flex-row items-start sm:items-center flex-wrap"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 600, delay: 300 } }"
                >
                    <span class="flex items-center">
                        🚀 #1 Peerlist Hunter | Collaborator | CEO @ CatOps
                    </span>
                    <span class="text-sm sm:text-base">
                        AI Engineer, Full-Stack Developer, Enterpreneur.
                    </span>
                </p>
                <div 
                     class="flex space-x-3 sm:space-x-4 my-4"
                     v-motion
                     :initial="{ opacity: 0 }"
                     :enter="{ opacity: 1, transition: { duration: 600, delay: 400 } }"
                >
                    <a href="https://www.linkedin.com/in/gorislavets/"
                        class="text-zinc-600 hover:text-zinc-400 transition">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" color="currentColor">
                                <path d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3M7.008 7h-.009" />
                                <path
                                    d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://x.com/@MGorislavets" class="text-zinc-600 hover:text-zinc-400 transition">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" color="currentColor">
                                <path
                                    d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109" />
                                <path
                                    d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://instagram.com/milan1337_" class="text-zinc-600 hover:text-zinc-400 transition">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" color="currentColor">
                                <path
                                    d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                                <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
                            </g>
                        </svg>
                    </a>
                    <a href="mailto:milan@gorislavets.com" class="text-zinc-600 hover:text-zinc-400 transition">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" color="currentColor">
                                <path
                                    d="m5 7l-1.218.813c-.874.582-1.311.873-1.548 1.317c-.237.445-.235.967-.231 2.01c.004 1.258.016 2.538.048 3.834c.077 3.075.115 4.612 1.246 5.742c1.13 1.13 2.688 1.17 5.804 1.248a116 116 0 0 0 5.799 0c3.116-.078 4.674-.117 5.804-1.248c1.13-1.13 1.169-2.667 1.246-5.742c.032-1.296.044-2.576.048-3.833c.003-1.044.005-1.566-.232-2.01c-.236-.445-.673-.736-1.547-1.318L19 7" />
                                <path
                                    d="m2 10l6.913 4.148C10.417 15.05 11.169 15.5 12 15.5s1.583-.45 3.087-1.353L22 10" />
                                <path
                                    d="M5 12V6c0-1.886 0-2.828.586-3.414S7.114 2 9 2h6c1.886 0 2.828 0 3.414.586S19 4.114 19 6v6m-9-2h4m-4-4h4" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://peerlist.io/goris" class="text-zinc-600 hover:text-zinc-400 transition">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5">
                                <path
                                    d="M8.87 3h6.26a6 6 0 0 1 5.963 5.337l.21 1.896c.131 1.174.131 2.36 0 3.534l-.21 1.896A6 6 0 0 1 15.13 21H8.87a6 6 0 0 1-5.963-5.337l-.21-1.896a16 16 0 0 1 0-3.534l.21-1.896A6 6 0 0 1 8.87 3" />
                                <path d="M9 17v-4m0 0V7h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3z" />
                            </g>
                        </svg>
                    </a>
                </div>
                <p 
                    class="text-zinc-600"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 600, delay: 500 } }"
                >
                    👋🏻 Hi, I'm Milan! I'm passionate about programming, especially web development, and I love
                    building innovative AI products.
                    <br><br>
                    I wrote my first lines of code when I was 11, and now - just 16 and a half years old - Ive already
                    spent nearly six years sharpening my skills, experimenting, and bringing ideas to life.
                </p>
                <div
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 600, delay: 600 } }"
                >
                    <ProjectCard 
                        v-for="(project, index) in projects" 
                        :key="project.id" 
                        :project="project"
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, transition: { duration: 600, delay: 700 + (index * 100) } }"
                    />
                </div>
                <div
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 600, delay: 1000 } }"
                >
                    <MyStack />
                </div>
            </div>
        </div>
    </main>
</template>