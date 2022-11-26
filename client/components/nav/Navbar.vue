<script setup lang="ts">
const route = useRoute();
const currentPath = computed(() => route.path);
</script>

<template>
    <header aria-label="Site Header" class="shadow-md">
        <div class="mx-auto flex items-center justify-between h-16 max-w-screen-xl px-4">
            <NavLogo />

            <nav aria-label="Site Nav"
                class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1">
                <NuxtLink class="text-gray-900 hover:text-blue-500" to="/" :class="{
                    'text-blue-500': currentPath === `/`,
                }">
                    Domů
                </NuxtLink>
                <NuxtLink class="text-gray-900 hover:text-blue-500" to="/createNewEvent" :class="{
                    'text-blue-500': currentPath === `/createNewEvent`,
                }">
                    Rezervace
                </NuxtLink>
                <NuxtLink class="text-gray-900 hover:text-blue-500" to="/sprava" :class="{
                    'text-blue-500': currentPath === `/sprava`,
                }">
                    Správa
                </NuxtLink>
                <NuxtLink class="text-gray-900 hover:text-blue-500" to="/users" :class="{
                    'text-blue-500': currentPath === `/users`,
                }">
                    Uživatelé
                </NuxtLink>
            </nav>

            <NavDropdown />
        </div>
    </header>
</template>