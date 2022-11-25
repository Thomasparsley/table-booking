<script>
export default {
    data() {
        return {
            users: [{
                name: 'Franta',
                lastName: 'Zdepa',
                password: ''
            },
            {
                name: 'Franta2',
                lastName: 'Zdepa2',
                password: ''
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
// <EditsEditUser :user="users[0]" />
//
</script>


<template>
    <h2>Tables</h2>
    <EditsEditTable :table="tables[0]" />

</template>