<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const route = useRoute();
const id = route.params.id as string;

const room: any = await fetchRoomById(id);

console.log(room);

async function sendUpdateRoom() {
    await updateRoom(id, room);
    navigateTo(`/sprava/mistnosti/${id}/prehled`);
}
</script>

<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <h2 class="text-xl py-4 font-medium">Upravit místnost {{ room.name }}</h2>

                    <form class="space-y-4">
                        <div>
                            <label class="sr-only" for="name">Název</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Název" type="text"
                                id="name" v-model="room.name" />
                        </div>

                        <div>
                            <label class="sr-only" for="place">Místo</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Místo" type="text"
                                id="place" v-model="room.place" />
                        </div>

                        <div>
                            <label class="sr-only" for="description">Popisek</label>
                            <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Popisek"
                                rows="8" id="description" v-model="room.description"></textarea>
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
                                @click.prevent="sendUpdateRoom">
                                <span class="font-medium">
                                    Uložit úpravy
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>