<script setup lang="ts">
const route = useRoute();
const currentPath = computed(() => route.path);
const isAdmin = await isUserAdmin();
</script>

<template>
    <div class="fixed bottom-0 w-screen border-t border-gray-200 bg-gray-50 lg:hidden">
        <nav class="flex items-center justify-center gap-12 overflow-x-auto p-4 text-sm font-medium">
            <NuxtLink class="flex-shrink-0 pl-4 text-gray-900 hover:text-blue-500" to="/" :class="{
                'text-blue-500': currentPath === `/`,
            }">
                <IconHome />
            </NuxtLink>
            <NuxtLink class="flex-shrink-0 pl-4 text-gray-900 hover:text-blue-500" to="/createNewEvent" :class="{
                'text-blue-500': currentPath === `/createNewEvent`,
            }">
                <IconCalendar />
            </NuxtLink>
            <NuxtLink class="flex-shrink-0 pl-4 text-gray-900 hover:text-blue-500" to="/sprava" :class="{
                'text-blue-500': currentPath === `/sprava`,
                'hidden': !isAdmin,
            }">
                <IconConfig />
            </NuxtLink>
            <NuxtLink class="flex-shrink-0 pl-4 text-gray-900 hover:text-blue-500" to="/users" :class="{
                'text-blue-500': currentPath === `/users`,
            }">
                <IconPeople />
            </NuxtLink>
        </nav>
    </div>
</template>