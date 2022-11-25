<script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;

const room: any = await fetchRoomById(id);
</script>

<template>
    <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="mt-8 justify-between">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        {{ room.name }}
                    </h1>

                    <p class="mt-0.5 text-sm">Ikona a umístění místnosti</p>
                </div>

                <details class="group relative mt-4">
                    <summary class="block">
                        <div>
                            <div class="prose max-w-none group-open:hidden">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    veniam dicta beatae eos ex error culpa delectus rem tenetur,
                                    architecto quam nesciunt, dolor veritatis nisi minus
                                    inventore, rerum at recusandae?
                                </p>
                            </div>
                        </div>
                    </summary>
                </details>

                <legend class="mb-1 text-sm font-medium">Color</legend>
                <div class="flow-root">
                    <div class="-m-0.5 flex flex-wrap">
                        <UtilsBadge />
                        <UtilsBadge />
                        <UtilsBadge />
                    </div>
                </div>

                <button
                    class="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500">
                    Add to Cart
                </button>
            </div>
        </div>
    </section>

</template>