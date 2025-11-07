<template>
    <div class="my-8">
                <div
                    class="flex mb-4"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 600, delay: 100 } }"
                >
                    <h1 class="serif text-3xl font-bold mr-4">My Tech Stack</h1>
                </div>
                    <p
                        class="text-zinc-600 mb-6"
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, transition: { duration: 600, delay: 200 } }"
                    >
                        Here are the technologies and tools I work with to bring ideas to life. From AI solutions to full-stack development, I'm passionate about using the right tool for each project.
                    </p>

                    <!-- Python + AI -->
                    <div
                        class="mb-6"
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, transition: { duration: 600, delay: 300 } }"
                    >
                        <h3 class="text-lg font-semibold text-zinc-700 mb-3">Python + AI</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:python.svg" alt="Python" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Python</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:tensorflow.svg" alt="TensorFlow" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">TensorFlow</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/simple-icons:fastapi.svg?color=%23009688" alt="FastAPI" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">FastAPI</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:numpy.svg" alt="NumPy" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">NumPy</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/simple-icons:langchain.svg?color=%231C3C3C" alt="Langchain" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Langchain</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/simple-icons:pandas.svg?color=%23150458" alt="Pandas" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Pandas</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/simple-icons:openai.svg?color=%23412991" alt="OpenAI" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">OpenAI</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/simple-icons:postgresql.svg?color=%234169E1" alt="pgVector" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">pgVector</span>
                            </div>
                        </div>
                    </div>

                    <!-- Full-Stack -->
                    <div
                        class="mb-6"
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, transition: { duration: 600, delay: 400 } }"
                    >
                        <h3 class="text-lg font-semibold text-zinc-700 mb-3">Full-Stack</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/vscode-icons:file-type-html.svg" alt="HTML" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">HTML</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/vscode-icons:file-type-css.svg" alt="CSS" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">CSS</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:javascript.svg" alt="JavaScript" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">JavaScript</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:typescript-icon.svg" alt="TypeScript" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">TypeScript</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:vue.svg" alt="Vue" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Vue</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:nuxt-icon.svg" alt="Nuxt" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Nuxt</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://nitro.build/icon.svg" alt="Nitro.js" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Nitro.js</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:tailwindcss-icon.svg" alt="TailwindCSS" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">TailwindCSS</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/simple-icons:nuxtdotjs.svg?color=%2300DC82" alt="NuxtUI" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">NuxtUI</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/fontisto:database.svg?color=%234479A1" alt="SQL" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">SQL</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:mongodb-icon.svg" alt="MongoDB" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    <div
                        v-motion
                        :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, transition: { duration: 600, delay: 500 } }"
                    >
                        <h3 class="text-lg font-semibold text-zinc-700 mb-3">Miscellaneous</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:vercel-icon.svg" alt="Vercel" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Vercel</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:cloudflare-icon.svg" alt="Cloudflare" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Cloudflare</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:google-cloud.svg" alt="Google Cloud" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">GC</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:microsoft-azure.svg" alt="Azure" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Azure</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:aws.svg" alt="AWS" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">AWS</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:docker-icon.svg" alt="Docker" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Docker</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:git-icon.svg" alt="Git" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Git</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/simple-icons:githubactions.svg?color=%232088FF" alt="CI/CD" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">CI/CD</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:linux-tux.svg" alt="Linux" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Linux</span>
                            </div>
                            <div class="flex flex-col items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/mdi:web.svg?color=%234A5568" alt="Domains" class="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2" loading="lazy" />
                                <span class="text-xs text-zinc-600 text-center">Domains</span>
                            </div>
                        </div>
                    </div>
                </div>
</template>