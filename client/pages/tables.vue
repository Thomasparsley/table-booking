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
            }],
            filter: {
                name: ""
            }
        }
    },
    computed: {
        realTables() {
            return this.tables.filter(table => table.name.includes(filter.name))
        }
    }
}

</script>

<template>

    <label for="nameInput"></label>
    <input id="nameInput" type="text" v-model="filter.name">

    <h2>Tables</h2>
    <EditsEditTables :tables="realTables" />
    <span>{{ tables }}</span>
    <span>{{ realTables }}</span>

</template>