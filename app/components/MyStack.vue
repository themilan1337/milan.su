<template>
    <div class="my-8">
                <div class="flex mb-4">
                    <h1 class="serif text-3xl font-bold mr-4">My Tech Stack</h1>
                </div>
                    <p class="text-zinc-600 mb-6">
                        Here are the technologies and tools I work with to bring ideas to life. From frontend frameworks to backend solutions, I'm passionate about using the right tool for each project.
                    </p>
                    
                    <!-- Frontend Technologies -->
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-zinc-700 mb-3">Frontend</h3>
                        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:nuxt-icon.svg" alt="Nuxt.js" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">Nuxt.js</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:vue.svg" alt="Vue.js" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">Vue.js</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:typescript-icon.svg" alt="TypeScript" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">TypeScript</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:javascript.svg" alt="JavaScript" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">JavaScript</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:tailwindcss-icon.svg" alt="Tailwind CSS" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">Tailwind</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:vitejs.svg" alt="Vite" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">ViteJS</span>
                            </div>
                        </div>
                    </div>

                    <!-- Backend Technologies -->
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-zinc-700 mb-3">Backend & Database</h3>
                        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:php.svg" alt="PHP" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">PHP</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:laravel.svg" alt="Laravel" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">Laravel</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:mysql-icon.svg" alt="MySQL" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">MySQL</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:mongodb-icon.svg" alt="MongoDB" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    <!-- Tools & Others -->
                    <div>
                        <h3 class="text-lg font-semibold text-zinc-700 mb-3">Tools & Others</h3>
                        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:git-icon.svg" alt="Git" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">Git</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:docker-icon.svg" alt="Docker" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">Docker</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:visual-studio-code.svg" alt="VS Code" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">VS Code</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:figma.svg" alt="Figma" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">Figma</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:github-icon.svg" alt="GitHub" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">GitHub</span>
                            </div>
                            <div class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition">
                                <NuxtImg src="https://api.iconify.design/logos:cloudflare-icon.svg" alt="Cloudflare" class="w-12 h-12 mb-2" />
                                <span class="text-xs text-zinc-600 text-center">Cloudflare</span>
                            </div>
                        </div>
                    </div>
                </div>
</template>