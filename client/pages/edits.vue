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

    <BothTable :tables="tables" :rooms="rooms" />

</template>