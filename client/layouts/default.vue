<script setup lang="ts">

let authTokenRenew: any = null;

onMounted(() => {
    authTokenRenew = setInterval(() => {
        fetch("/api/auth/renew", {
            method: "POST",
            credentials: "include",
        });
    }, 1000 * 60 * 5);
});

onUnmounted(() => {
    clearInterval(authTokenRenew);
});

const route = useRoute();
const currentPath = computed(() => route.path);

</script>


<template>
    <div class="relative min-h-screen grid grid-rows-[64px_1fr]" :class="{ 'bg-gray-50': currentPath === '/' }">
        <NavNavbar />

        <main class="container mx-auto max-w-7xl mb-24">
            <slot />
        </main>
    </div>

    <NavMobile />
</template>