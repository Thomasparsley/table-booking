<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const route = useRoute();
const id = route.params.id as string;

const room: any = await fetchRoomById(id);
const editPath = `/sprava/mistnosti/${id}/upravit`;
const tablesPath = `/sprava/mistnosti/${id}/stoly`;
</script>

<template>
    <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="mt-8 justify-between">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        {{ room.name }}
                    </h1>

                    <p class="mt-0.5 text-sm">
                        <IconPlace /> {{ room.place }}
                    </p>
                </div>

                <details class="group relative mt-4">
                    <summary class="block">
                        <div>
                            <div class="max-w-none">
                                <p>
                                    {{ room.description }}
                                </p>
                            </div>
                        </div>
                    </summary>
                </details>

                <div class="my-4">
                    <legend class="mb-2 text-base font-medium">Color</legend>
                    <div class="flow-root">
                        <div class="-m-0.5 flex gap-1 flex-wrap">
                            <UtilsBadge />
                            <UtilsBadge />
                            <UtilsBadge />
                        </div>
                    </div>
                </div>

                <div class="flex gap-4">
                    <NuxtLink :to="editPath"
                        class="w-64 mt-4 block rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white hover:bg-blue-500">
                        Upravit místnost
                    </NuxtLink>
                    <NuxtLink :to="tablesPath"
                        class="w-64 mt-4 block rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white hover:bg-blue-500">
                        Správa stolů
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>

</template>