<script>
export default {
    props: ['rooms', 'tables'],
    data() {
        return {
            filter: "",
            loaded: false,
        }
    },

    computed: {
        filteredrooms() {
            // pak vyfiltrovat

            return this.room
        }
    },

    methods: {
        onEdit(room) {
            console.log("Editing " + JSON.stringify(room))
        },
        onDelete(room) {
            console.log("Deleting " + JSON.stringify(room))
        },
        onAdd() {
            console.log("Creating new room")
        }
    }
}
</script>

<template>
    <section class="md:mt-8">
        <div class="w-full max-w-3xl mx-auto bg-white shadow-lg md:rounded-md border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100 flex justify-between">
                <h2 class="font-semibold text-gray-800">Místnosti a Stoly</h2>
                <button @click="onAdd"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    +
                </button>
            </header>
            <label for="filter"
                class="relative block overflow-hidden px-4 pt-4 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">

                <input v-model="filter" type="text" id="filter" placeholder="Filtr"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span
                    class="absolute left-5 top-2 -translate-y-1/4 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Hledej
                </span>
            </label>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="room-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Název</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Pozice</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Akce</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="room in filteredrooms" :key="room.id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex rooms-center">
                                        <div class="font-medium text-gray-800">{{ room.name }}
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{ room.place }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap flex gap-2">
                                    <button @click="onEdit(room)" class="text-right">Edit</button>
                                    <button @click="onDelete(room)" class="text-right">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>



</template>