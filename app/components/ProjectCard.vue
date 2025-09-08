<template>
    <div class="my-4">
        <div class="w-full rounded-2xl border border-gray-200">
            <div class="p-4">
                <div class="flex mb-4">
                    <h1 class="serif mr-4">{{ project.name }}</h1>
                    <span
                        class="max-w-40 mr-2 truncate whitespace-nowrap inline-block py-1 px-3 rounded-lg text-xs font-medium bg-black text-white">
                        {{ project.period }}
                    </span>
                    <NuxtLink v-if="project.githubUrl" :to="project.githubUrl">
                        <svg class="h-4 w-4 my-auto mt-1 mr-2 text-black transition hover:text-zinc-600"
                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M6.517 17.113c.395.578 1.592 1.81 3.225 2.12M9.864 22C8.836 21.83 2 19.606 2 12.093C2 5.063 8.002 2 12 2c4 0 10 3.063 10 10.093c0 7.513-6.836 9.738-7.864 9.907c0 0-.21-3.417-.087-4.003c.122-.586-.294-1.528-.294-1.528c.971-.364 2.45-.884 2.945-2.282c.385-1.084.627-2.658-.45-4.138c0 0 .282-2.39-.25-2.484c-.533-.092-2.1.947-2.1.947c-.457-.13-1.476-.377-1.898-.333c-.423-.044-1.445.203-1.902.333c0 0-1.568-1.04-2.1-.947s-.25 2.484-.25 2.484c-1.077 1.48-.835 3.054-.45 4.138c.496 1.398 1.974 1.918 2.945 2.282c0 0-.416.942-.294 1.528S9.864 22 9.864 22"
                                color="currentColor" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink v-if="project.websiteUrl" :to="project.websiteUrl">
                        <svg class="h-4 w-4 my-auto mt-1 mr-2 text-black transition hover:text-zinc-600"
                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" color="currentColor">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 12c0 6 4 10 4 10s4-4 4-10s-4-10-4-10s-4 4-4 10m13 3H3m18-6H3" />
                            </g>
                        </svg>
                    </NuxtLink>
                </div>
                <div class="p-4 border border-zinc-200 rounded-xl">
                    <NuxtImg :src="project.image" class="w-full h-full object-cover rounded-2xl" :alt="project.name" loading="lazy" placeholder="blur"></NuxtImg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>