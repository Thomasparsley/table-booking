<script>
export default {
    data() {
        return {
            tables: [{
                name: 'Haha',
                descript: 'nejmensi',
                chairs: 5,
                room: 10
            },
            {
                name: 'Hihi',
                descript: 'nejvetsi',
                chairs: 5,
                room: 10
            }]
        }
    }
}

</script>

<template>

    <h2>Tables</h2>
    <EditsEditTables :tables="tables" />
    <span>{{ tables }}</span>

</template>