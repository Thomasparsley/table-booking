<script setup lang="ts">
const basicDuration = [
    {
        id: 1,
        name: "15 minut",
    },
    {
        id: 2,
        name: "30 minut",
    },
    {
        id: 3,
        name: "1 hodina",
    },
]

let activeBasicDuration = ref(basicDuration[0])

function setBasicDuration(id: number) {
    const finded = basicDuration.find((item) => item.id === id)
    if (finded) {
        activeBasicDuration.value = finded
    }
}
</script>

<template>
    <div class="mx-auto my-40 bg-slate-600 p-16">

        <div class="rounded-lg bg-white max-w-xl">
            <div class="p-6 flex flex-col gap-6">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900">Create New Event</h1>
                    <p class="text-gray-600">Create a new event and invite your friends</p>
                </div>

                <div>
                    <label>Výběr místnosti</label>
                    <input type="text" class="w-full border-2 border-neutral-200 mt-1 px-4 py-2 rounded-full">

                </div>

                <div class="grid grid-cols-3 gap-4 max-w-full">
                    <div class="flex flex-col">
                        <lable>Den</lable>
                        <input type="text" class="w-full border-2 border-neutral-200 mt-1 px-4 py-2 rounded-full">
                    </div>

                    <div class="flex flex-col">
                        <label>Od kdy</label>
                        <input type="text" class="w-full border-2 border-neutral-200 mt-1 px-4 py-2 rounded-full">
                    </div>

                    <div class="flex flex-col w-full">
                        <label>Do kdy</label>
                        <input type="text" class="w-full border-2 border-neutral-200 mt-1 px-4 py-2 rounded-full">
                    </div>
                </div>

                <div>
                    <p class="mb-2">Délka události</p>

                    <div class="flex gap-1 w-full justify-between bg-neutral-300 p-1 rounded-full">
                        <span v-for="item in basicDuration" :key="item.id"
                            class="w-full px-6 py-2 rounded-full text-center hover:cursor-pointer" :class="{
                                'bg-white': item.id === activeBasicDuration.id,
                                'text-neutral-500': item.id !== activeBasicDuration.id,
                            }" @click="setBasicDuration(item.id)">
                            {{ item.name }}
                        </span>
                    </div>
                </div>


            </div>

            <div class="border-t-2 border-neutral-100">
                <div class="p-6 flex gap-4">
                    <button class="w-full px-6 py-2 border border-neutral-300 rounded-full">Zrušit</button>
                    <button class="w-full px-6 py-2 bg-green-700 rounded-full">Vytvořit</button>
                </div>
            </div>
        </div>
    </div>
</template>