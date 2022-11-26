<script>

export default {
    setup() {
        definePageMeta({
            middleware: ["auth"]
        })
    },

    data() {
        return {
            tables: [{
                name: 'nana',
                descript: 'nejvetsi',
                chairs: 4,
                room: 12
            },
            {
                name: 'Haha',
                descript: 'nejmensi',
                chairs: 5,
                room: 10
            }]
        }
    },
}

</script>

<template>
    <h1 class="mt-4 ml-4 text-3xl font-medium">Vítej na domovské stránce</h1>
    <UtilsHorizontalLine />
    <div>

    </div>
    <div class="my-8 ml-4 ">
        <h3 class="text-3xl py-2 font-medium">Rezervace</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
        </div>
    </div>
</template>