<script>
export default {
    props: ['table'],
    methods: {
        async submitEvent() {
            console.log(table);
        }
    }
}
</script>

<template>
    <h2>Edit Table</h2>
    <form action="edit" class="column">
        <input type="text" v-model="table.name">
        <input type="text" v-model="table.descript">
        <input type="text" v-model="table.chairs">
        <input type="text" v-model="table.room">
        <button @click.prevent="submitEvent">Submit</button>
    </form>
    <span>{{ table }}</span>
</template>
