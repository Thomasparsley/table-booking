<!-- <script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;

const room: any = await fetchRoomById(id);
</script> -->

<template>
    <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="mt-8 justify-between">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        Název stolu
                    </h1>

                    <p class="mt-0.5 text-sm">Odkaz na místnost</p>
                </div>

                <details class="group relative mt-4">
                    <summary class="block">
                        <div>
                            <div class="max-w-none">
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

                <div class="my-4">
                    <legend class="mb-2 text-base font-medium">Vlastnosti stolu</legend>
                    <div class="flow-root">
                        <div class="-m-0.5 flex gap-1 flex-wrap">
                            <UtilsBadge />
                            <UtilsBadge />
                            <UtilsBadge />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>