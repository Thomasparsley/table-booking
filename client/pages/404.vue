<script setup lang="ts">
definePageMeta({
    // @ts-ignore
    layout: "navless",
});
</script>

<template>
    <div class="flex flex-col h-screen bg-white">
        <div class="w-full h-64 image-background"></div>

        <div class="flex items-center justify-center flex-1">
            <div class="max-w-xl px-4 py-8 mx-auto text-center">
                <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Tuto stránku nelze najít.
                </h1>

                <p class="mt-4 text-gray-500">
                    Zkus ji najít znovu nebo se vrať na domovskou obrazovku.
                </p>

                <NuxtLink to="/"
                    class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring">
                    Jít zpět
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<style scoped>
.image-background {
    background-image: url("/img/profile-background.svg");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
}
</style>
