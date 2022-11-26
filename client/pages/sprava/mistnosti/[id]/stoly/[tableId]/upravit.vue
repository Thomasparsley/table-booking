<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const defaultDocks = ["TX534", "AB 32 USB+", "ThunderFlame", "Electric S4"];
const defaultMonitors = ["LG 27", "LG 32", "LG 42", "LG 55", "UltraWide BG35 8k", "SD wide 35 Logic", "MetalMonitor G43", "IIMAYA T21/9"];

const route = useRoute();
const id = route.params.id as string;
const tableId = route.params.tableId as string;
const tables = await fetchTablesInRoom(id) as any[];

const room: any = await fetchRoomById(id);
const table = tables.find((table) => table._id === tableId);
const tableFeatures: string[] = table.features;

const selectedDocks = ref(tableFeatures.filter((feature: string) => defaultDocks.includes(feature)));
const selectedMonitors = ref(tableFeatures.filter((feature: string) => defaultMonitors.includes(feature)));

const tablesPath = `/sprava/mistnosti/${id}/stoly`;
async function sendUpdateTable() {
    const payload = {
        name: table.name,
        seatCount: table.seatCount,
        roomId: id,
        features: [...selectedDocks.value, ...selectedMonitors.value]
    }

    await updateTable(tableId, payload);
    navigateTo(tablesPath);
}
</script>


<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <h2 class="text-xl py-4 font-medium">Přidání místnosti</h2>

                    <form class="space-y-4">
                        <div>
                            <label for="name"
                                class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                <span class="text-xs font-medium text-gray-700"> Název </span>

                                <input type="text" id="name" placeholder=""
                                    class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    v-model="table.name" />
                            </label>
                        </div>

                        <div>
                            <label for="place"
                                class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                <span class="text-xs font-medium text-gray-700"> Počet židlí </span>

                                <input placeholder=""
                                    class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    min="1" max="10" type="number" id="chairs" v-model="table.seatCount" />
                            </label>
                        </div>

                        <label for="feature-doc" class="block text-sm font-medium text-gray-700">
                            Typ dokovací stanice
                        </label>
                        <select id="feature-doc" name="feature-doc"
                            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            multiple v-model="table.docks">
                            <option v-for="dock in defaultDocks" :key="dock">
                                {{ dock }}
                            </option>
                        </select>

                        <label for="feature-monitor" class="block text-sm font-medium text-gray-700">Speciální
                            monitory</label>
                        <select id="feature-monitor" name="feature-monitor"
                            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            multiple v-model="table.monitors">
                            <option v-for="monitor in defaultMonitors" :key="monitor">
                                {{ monitor }}
                            </option>
                        </select>


                        <div class="mt-4">
                            <button type="submit"
                                class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
                                @click.prevent="sendUpdateTable">
                                <span class="font-medium">
                                    Upravit stůl
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>