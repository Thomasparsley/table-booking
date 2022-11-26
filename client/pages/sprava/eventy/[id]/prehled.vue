<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const route = useRoute();
const id = route.params.id as string;

const event: any = await fetchEventById(id);

console.log(event);
</script>

<template>
    <!--     <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="mt-8 justify-between">

                <div>
                    <label for="name"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-gray-700"> Název </span>

                        <input type="text" id="name" placeholder="Název rezervace"
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            v-model="reservationForm.name" />
                    </label>
                </div>

                <div class="mt-2 p-4">
                    <dl class="flex flex-row flex-wrap gap-1 justify-between items-center">
                        <div>
                            <dd class="text-medium flex flex-col font-bold">
                                <span>
                                    {{ stringToDate(reservationForm.fromDate).getDay() }}. {{
                                            stringToDate(reservationForm.fromDate).getMonth()
                                    }} {{
        stringToDate(reservationForm.fromDate).getFullYear()
}},
                                </span>
                                <span>
                                    {{ stringToDate(reservationForm.fromDate).getHours() }}:{{
                                            stringToDate(reservationForm.fromDate).getMinutes()
                                    }}
                                </span>
                            </dd>
                        </div>
                        <IconArrorRight class="w-10 h-10" />
                        <div>
                            <dd class="text-medium flex flex-col font-bold">
                                <span>
                                    {{ stringToDate(reservationForm.toDate).getDay() }}. {{
                                            stringToDate(reservationForm.toDate).getMonth()
                                    }} {{
        stringToDate(reservationForm.toDate).getFullYear()
}},
                                </span>
                                <span>
                                    {{ stringToDate(reservationForm.toDate).getHours() }}:{{
                                            stringToDate(reservationForm.toDate).getMinutes()
                                    }}
                                </span>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <label for="description"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-gray-700"> Popisek </span>

                        <textarea type="text" id="description" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            v-model="reservationForm.description"></textarea>
                    </label>
                </div>

                <div>
                    <h2>
                        Vybrané stoly
                    </h2>
                    <div class="flex flex-col gap-4">
                        <TableCard :name="table.name" :place="table.room.name" :chairs="table.seatCount"
                            :features="table.features" :active="isTableSelected(table._id)"
                            v-for="table in selectedFullTables" :keys="table._id" />
                    </div>

                    <h2>
                        Vybrané místnosti
                    </h2>
                    <div class="flex flex-col gap-4">
                        <TableCard :name="room.room.name" :place="room.room.name" :chairs="calcRoomChairs(room.tables)"
                            :features="[]" :active="isTableSelected(room.room._id)" v-for="room in selectedFullRooms"
                            :keys="room.room._id" />
                    </div>
                </div>

                <UtilsHorizontalLine />

                <div>
                    <div class="flex justify-end gap-4">
                        <button type="submit"
                            class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
                            @click.prevent="completedReservation">
                            <span class="font-medium">
                                Dokončit rezervaci
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
</template>