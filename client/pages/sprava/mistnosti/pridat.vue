<script setup lang="ts">
const newRoom = ref({
    name: ""
});

async function sendNewRoom() {
    const createdRoom: any = await createRoom(newRoom.value);
    navigateTo(`/sprava/mistnosti/prehled/${createdRoom._id}`);
}
</script>

<template>
    <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <h2>Přidání místnosti</h2>
                    <form class="space-y-4">
                        <div>
                            <label class="sr-only" for="name">Název</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text"
                                id="name" v-model="newRoom.name" />
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                @click.prevent="sendNewRoom">
                                <span class="font-medium"> Přidat místnost </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>