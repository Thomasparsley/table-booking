<script>
export default {
    props: ['rooms', 'tables'],
    data() {
        return {
            filter: "",
            includeRooms: true,
            includeTables: true
        }
    },

    computed: {
        filteredItems() {
            if (this.includeRooms && this.includeTables) {
                return this.rooms.concat(this.tables).filter(item => item.name.includes(this.filter))
            }
            if (this.includeRooms) {
                return this.rooms.filter(item => item.name.includes(this.filter))
            }
            if (this.includeTables) {
                return this.tables.filter(item => item.name.includes(this.filter))
            }
            return []
            // .concat(this.tables).filter(item => item.name.includes(this.filter))
        }
    },

    mounted() {
        this.tables.forEach(table => table.type = "stůl")
        this.rooms.forEach(room => room.type = "místnost")
    },

    methods: {
        onEdit(item) {
        },
        onDelete(item) {
        },
        onAdd() {
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
            <div class="flex gap-5 ml-5 mt-5">
                <div class="form-check">
                    <input v-model="includeTables"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                        Stoly
                    </label>
                </div>
                <div class="form-check">
                    <input v-model="includeRooms"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                        Místnosti
                    </label>
                </div>
            </div>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="item-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Název</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Typ</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Akce</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="item in filteredItems" :key="item.id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{ item.name }}
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{ item.type }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap flex gap-2">
                                    <button @click="onEdit(item)" class="text-right">Edit</button>
                                    <button @click="onDelete(item)" class="text-right">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>