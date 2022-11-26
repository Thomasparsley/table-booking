<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const allRooms: any[] = await fetchRooms();
const filterRooms = ref("");

const filteredRooms = computed(() => {
    return allRooms.filter((room) => room.name.toLowerCase().includes(filterRooms.value.toLowerCase()));
});

const allTables = await fetchTables() as any[];
const filterTables = ref("");

const filteredTables = computed(() => {
    return allTables.filter((table) => table.name.toLowerCase().includes(filterTables.value.toLowerCase()));
});

const allEvents = await fetchEvents() as any[];
const filterEvents = ref("");

const filteredEvents = computed(() => {
    return allEvents.filter((event) => event.name.toLowerCase().includes(filteredEvents.value.toLowerCase()));
});

</script>

<template>
    <section class="md:mt-8">
        <div class="w-full max-w-3xl mx-auto bg-white shadow-lg md:rounded-md border border-gray-200">
            <header class="items-center px-5 py-4 border-b border-gray-100 flex justify-between">
                <h2 class="text-2xl font-semibold text-gray-800">Místnosti</h2>
                <NuxtLink to="/sprava/mistnosti/pridat"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full">
                    <IconAdd />
                </NuxtLink>
            </header>

            <label for="filter"
                class="bg-gray-50 relative block overflow-hidden px-4 pt-4 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">

                <input v-model="filterRooms" type="text" id="filter" placeholder="Filtr"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span
                    class="absolute left-5 top-2 -translate-y-1/4 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Hledej
                </span>
            </label>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Název místnosti</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Akce</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="room in filteredRooms" :key="room._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ room.name }}
                                        </div>
                                    </div>
                                </td>

                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <NuxtLink :to="`/sprava/mistnosti/${room._id}/prehled`"
                                            class="font-medium text-gray-800">Zobrazit
                                        </NuxtLink>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section class="md:mt-8">
        <div class="w-full max-w-3xl mx-auto bg-white shadow-lg md:rounded-md border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100 flex">
                <h2 class="text-2xl font-semibold text-gray-800">Stoly</h2>
            </header>

            <label for="filter"
                class="bg-gray-50 relative block overflow-hidden px-4 pt-4 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">

                <input v-model="filterTables" type="text" id="filter" placeholder="Filtr"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span
                    class="absolute left-5 top-2 -translate-y-1/4 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Hledej
                </span>
            </label>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Místnost</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Název Stolu</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Počet míst k sezení</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Akce</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="table in filteredTables" :key="table._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ table.room.name }}
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ table.name }}
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ table.seatCount }}
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <NuxtLink :to="`/sprava/mistnosti/${table.room._id}/stoly/${table._id}/upravit`"
                                            class="font-medium text-gray-800">
                                            <IconPencil class="w-4" />
                                        </NuxtLink>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section class="md:mt-8">
        <div class="w-full max-w-3xl mx-auto bg-white shadow-lg md:rounded-md border border-gray-200">
            <header class="items-center px-5 py-4 border-b border-gray-100 flex justify-between">
                <h2 class="text-2xl font-semibold text-gray-800">Akce</h2>
            </header>

            <label for="filter"
                class="bg-gray-50 relative block overflow-hidden px-4 pt-4 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">

                <input v-model="filterEvents" type="text" id="filter" placeholder="Filtr"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span
                    class="absolute left-5 top-2 -translate-y-1/4 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    <IconViewer />
                </span>
            </label>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Název akce</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Akce</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="event in filteredEvents" :key="event._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ event.name }}
                                        </div>
                                    </div>
                                </td>

                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <NuxtLink :to="`/sprava/mistnosti/${event._id}/prehled`"
                                            class="font-medium text-gray-800">
                                            Zobrazit
                                        </NuxtLink>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>