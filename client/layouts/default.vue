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

</script>


<template>
    <div class="relative min-h-screen">
        <NavNavbar />

        <main class="mx-auto max-w-7xl mb-20">
            <slot />
        </main>

        <NavMobile />
    </div>
</template>