<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const route = useRoute();
const id = route.params.id as string;

const event: any = await fetchEventById(id);
</script>

<template>
    <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="mt-8 justify-between">

                <div>
                    <label for="name"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-gray-700"> Název </span>

                        <input type="text" id="name" placeholder="Název rezervace"
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            v-model="event.name" />
                    </label>
                </div>

                <div>
                    <label for="description"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-gray-700"> Popisek </span>

                        <textarea type="text" id="description" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            v-model="event.description"></textarea>
                    </label>
                </div>
                <!-- 
                <div>
                    <h2>
                        Vybrané stoly
                    </h2>
                    <div class="flex flex-col gap-4">
                        <TableCard :name="table.name" :place="table.room.name" :chairs="table.seatCount"
                            :features="table.features" v-for="table in event.tables" :keys="table._id" />
                    </div>

                    <h2>
                        Vybrané místnosti
                    </h2>
                    <div class="flex flex-col gap-4">
                        <TableCard :name="room.room.name" :place="room.room.name" :chairs="calcRoomChairs(room.tables)"
                            :features="[]" v-for="room in event.rooms" :keys="room.room._id" />
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>