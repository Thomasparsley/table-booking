<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const newRoom = ref({
    name: "",
    place: "",
    description: "",
});

async function sendNewRoom() {
    const createdRoom: any = await createRoom(newRoom.value);
    navigateTo(`/sprava/mistnosti/prehled/${createdRoom._id}`);
}
</script>

<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <h2 class="text-xl py-4 font-medium">Přidání místnosti</h2>

                    <form class="space-y-4">
                        <div>
                            <label class="sr-only" for="name">Název</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Název" type="text"
                                id="name" v-model="newRoom.name" />
                        </div>

                        <div>
                            <label class="sr-only" for="place">Místo</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Místo" type="text"
                                id="place" v-model="newRoom.place" />
                        </div>

                        <div>
                            <label class="sr-only" for="description">Popisek</label>
                            <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Popisek"
                                rows="8" id="description" v-model="newRoom.description"></textarea>
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
                                @click.prevent="sendNewRoom">
                                <span class="font-medium">
                                    Přidat místnost
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>