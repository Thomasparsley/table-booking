<script>
export default {
    props: ['user'],
    methods: {
        async submitEvent() {
            console.log(user);
        }
    }
}
</script>

<template>
    <h2>Edit User</h2>
    <form action="edit" class="column">
        <input type="text" v-model="user.name">
        <input type="text" v-model="user.lastName">
        <input type="password" v-model="user.lastName">
        <button @click.prevent="submitEvent">Submit</button>
    </form>
    <span>{{ user }}</span>
</template>
