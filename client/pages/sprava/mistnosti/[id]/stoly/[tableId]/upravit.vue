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

    console.log(payload);

    await updateTable(tableId, payload);
    navigateTo(tablesPath);
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
                                id="name" v-model="table.name" />
                        </div>

                        <div>
                            <label class="sr-only" for="chairs">Počet židlí</label>
                            <input class="" placeholder="Počet židlí:" min="1" max="15" type="number" id="chairs"
                                v-model="table.seatCount" />
                        </div>

                        <div>
                            <label for="feature-doc" class="block text-sm font-medium text-gray-700">
                                Typ dokovací stanice
                            </label>
                            <select id="feature-doc" name="feature-doc"
                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                multiple v-model="selectedDocks">
                                <option v-for="dock in defaultDocks" :key="dock">
                                    {{ dock }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label for="feature-monitor" class="block text-sm font-medium text-gray-700">Speciální
                                monitory</label>
                            <select id="feature-monitor" name="feature-monitor"
                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                multiple v-model="selectedMonitors">
                                <option v-for="monitor in defaultMonitors" :key="monitor">
                                    {{ monitor }}
                                </option>
                            </select>
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
                                @click.prevent="sendUpdateTable">
                                <span class="font-medium"> Přidat stůl</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>