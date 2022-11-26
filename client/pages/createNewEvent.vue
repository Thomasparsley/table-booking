<script setup lang="ts">
import { Ref } from 'vue';

definePageMeta({
    middleware: ["auth"]
})

const reservationForm = ref({
    fromDate: currentDate(),
    toDate: currentDate(),
});

function currentDate() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return date.toISOString().substr(0, 16);
}

const allStages = [{
    id: 1,
    percentage: 25
}, {
    id: 2,
    percentage: 50
}, {
    id: 3,
    percentage: 100
}];

let availableTables: Ref<any[]> = ref([]);

const stage = ref(allStages[0]);

async function performStage() {
    if (stage.value.id < allStages.length) {
        stage.value = allStages[stage.value.id];
    }

    if (stage.value.id === 1) {
        availableTables.value = [];
    }
    if (stage.value.id === 2) {
        availableTables.value = await fetchAvailableTablesInDataRage(
            reservationForm.value.fromDate,
            reservationForm.value.toDate
        ) as any[];
    }
}
</script>

<template>
    <div class="mx-auto max-w-3xl px-4">
        <div class="mt-8 mb-8 md:mb-14">
            <Progress :percentage="stage.percentage" />
        </div>

        <section v-if="stage.id == 1" class="mx-auto flex flex-col justify-center">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-4">
                    <div>
                        <h1 class="text-3xl font-bold text-gray-900">Vyhledej dostupné místnosti</h1>
                    </div>

                    <div class="grid md:grid-cols-2 gap-4 max-w-full">
                        <div class="flex flex-col">
                            <label>Od kdy</label>
                            <input type="datetime-local" id="start" name="trip-start" min="2022-01-01"
                                class="w-full border-2 border-neutral-200 mt-1 px-4 py-2 rounded-full"
                                v-model="reservationForm.fromDate">
                        </div>

                        <div class="flex flex-col w-full">
                            <label>Do kdy</label>
                            <input type="datetime-local" id="end" name="trip-start" min="2022-01-01"
                                class="w-full border-2 border-neutral-200 mt-1 px-4 py-2 rounded-full"
                                v-model="reservationForm.toDate">
                        </div>
                    </div>
                </div>

                <UtilsHorizontalLine />

                <div>
                    <div class="flex gap-4">

                        <button type="submit"
                            class="inline-flex w-full items-center justify-center rounded-lg px-5 py-3c sm:w-auto border-2">
                            <span class="font-medium">
                                Zrušit
                            </span>
                        </button>
                        <button type="submit"
                            class="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white sm:w-auto"
                            @click.prevent="performStage">
                            <span class="font-medium">
                                Hledat
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="stage.id == 2">

        </section>
    </div>
</template>