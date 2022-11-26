<script>
export default {
    props: ['users'],
    methods: {
        async submitEvent() {
        }
    }
}
</script>

<template>
    <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
            <thead class="bg-gray-100">
                <tr>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        <div class="flex items-center gap-2">
                            Jméno

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        <div class="flex items-center gap-2">
                            Příjmení

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        <div class="flex items-center gap-2">
                            Email

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        <div class="flex items-center gap-2">
                            Heslo

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Speciální
                    </th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                <tr v-for="user in users" :key="user.id">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <input type="text" v-model="user.firstName">
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <input type="text" v-model="user.lastName">
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <input type="text" v-model="user.email">
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <input type="text" v-model="user.password">
                    </td>
                    <td class="whitespace-nowrap px-4 py-2">
                        <!-- <strong class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">
                            Cancelled
                        </strong> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
