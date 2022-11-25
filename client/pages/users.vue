<script>
export default {
    data() {
        return {
            users: [{
                firstName: 'Franta',
                lastName: 'Zdepa',
                email: 'emaiiil',
                password: 'sss'
            },
            {
                firstName: 'Franta2',
                lastName: 'Zdepa2',
                email: 'emaiiil',
                password: 'sss'
            }],
        }
    }
}
</script>

<template>
    <h2>Users</h2>
    <EditsEditUsers :users="users" />
    <span>{{ users }}</span>
</template>