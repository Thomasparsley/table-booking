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
    <div>
        <h1>Welcome to the homepage</h1>
        <span>Hele, sem muzem neco dat kdyztak</span>
    </div>
    <ReservationCard />
    <AnythingList :items="tables" />

    <RoomTable :tables="tables" :rooms="tables" />

</template>