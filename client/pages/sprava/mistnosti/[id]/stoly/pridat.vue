<script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;

const room: any = await fetchRoomById(id);

const newTableForm = ref({
    roomId: id,
    name: "",
    seatCount: 0,
    docks: [],
    monitors: [],
})

async function sendNewTable() {
    const payload = {
        name: newTableForm.value.name,
        features: [...newTableForm.value.docks, ...newTableForm.value.monitors]
    }

    console.log(payload);

    await createNewTable(payload);
}
</script>

<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <h2 class="text-xl pt-2 font-medium">Přidání stůl</h2>
                    <h3 class="text-l pb-2 bg-grey-300 font-medium">Místnost ke které patří {{ room.name }}</h3>
                    <form class="space-y-4">
                        <div>
                            <label class="sr-only" for="name">Název stolu</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text"
                                id="name" v-model="newTableForm.name" />
                        </div>

                        <div>
                            <label class="sr-only" for="chairs">Počet židlí</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Počet židl"
                                type="number" id="chairs" v-model="newTableForm.name" />
                        </div>

                        <div>
                            <label for="feature-doc" class="block text-sm font-medium text-gray-700">
                                Typ dokovací stanice
                            </label>
                            <select id="feature-doc" name="feature-doc"
                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                multiple v-model="newTableForm.docks">
                                <option>TX534</option>
                                <option>AB 32 USB+</option>
                                <option>ThunderFlame</option>
                                <option>Electric S4</option>
                            </select>
                        </div>

                        <div>
                            <label for="feature-monitor" class="block text-sm font-medium text-gray-700">Speciální
                                monitory</label>
                            <select id="feature-monitor" name="feature-monitor"
                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                multiple v-model="newTableForm.monitors">
                                <option>UltraWide BG35 8k</option>
                                <option>SD wide 35 Logic</option>
                                <option>MetalMonitor G43</option>
                                <option>IIMAYA T21/9</option>
                            </select>
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
                                @click.prevent="sendNewTable">
                                <span class="font-medium"> Přidat stůl</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>