<script>
export default {
    props: ['table'],
    methods: {
        async submitEvent() {
            console.log(table);
        }
    }
}
</script>

<template>
    class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 px">
    4 le class="min-w-full divide-y divide-gray-200 text-sm">
    ad class="bg-gray-100">

    class="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
    el class="sr-only" for="SelectAll">Select All</label>

    ut class="h-5 w-5 rounded border-gray-200" type="checkbox" id="SelectAll" />
    >
    class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
    class="flex items-center gap-2">


    xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" vie viewBox="0 0 20 20"
    filloo>
    <path fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd" />
    </svg>
    </div>
    </th>
    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
        <d class="flex items-center gap-2">
            ription

            xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" vie viewBox="0 0 20 20"
            fill>
            <pah fill-rule="evenodd"
                d="5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                cl-rule="evenodd" />
            </g>
            </v>
            </>
            <class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div class="flex items-center gap-2">
                    rs

                    <sv xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" vie viewBox="0 0 20 20" filloo>
                        h fill-rule="evenodd"
                        5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414
                        0l-4-4a1 1 0 010-1.414z"
                        -rule="evenodd" />
                        g>
                        v>
                        >
                        class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        class="flex items-center gap-2">


                        xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" vie viewBox="0 0 20 20"
                        filloo>
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                        </svg>
                </div>
    </th>
    <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
        us
    </th>
    >
    </tead>

    <tbdy class="divide-y divide-gray-200">
        <t <tclass="sticky inset-y-0 left-0 bg-white px-4 py-2">
            <el class="sr-only" for="Row1">Row 1</label>

                <ut class="h-5 w-5 rounded border-gray-200" type="checkbox" id="Row1" />
                <>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        ut type="text" v-model="table.name">
        </t>
        <tdclass="whitespace-nowrap px-4 py-2 text-gray-700">
            <iut type="text" v-model="table.descript">
                </>
                <tclass="whitespace-nowrap px-4 py-2 text-gray-700">
                    <iut type="text" v-model="table.chairs">
                        <>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                ut type="text" v-model="table.room">
                                </t>
                                <tdclass="whitespace-nowrap px-4 py-2">
                                    <!- <strong class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">
                                        Cancelled
                                        </strong> -->
                                        </t>
                        </>
                        </ody>
                        <ble>
                            </div>

</template>
