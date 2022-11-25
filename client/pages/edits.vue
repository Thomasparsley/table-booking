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


// <h2>Users</h2>
// <EditsEditUser :user="users" />
//
</script>


<template>
    <h2>Tables</h2>
    <EditsEditTable :tables="tables" />
    <span>{{ tables }}</span>

    <h2>Users</h2>
    <EditsEditUser :users="users" />
    <span>{{ users }}</span>


</template>