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
            filter: {
                firstName: "",
                lastName: "",
                email: "",
            }
        }
    },
    methods: {
        similarUser(user, filter) {
            for (key in filter.keys) {
                var attribute = user[key]
                if ((typeof attribute === 'string' || myVar instanceof String) && attribute != "" && !attribute.includes(filter[key])) {
                    return false
                }
            }
            return true
        }
    },
    computed: {
        realUsers() {
            return this.users.filter((user) => this.similarUser(user, this.filter))
        }
    }
}
</script>

<template>
    <h2>Users</h2>
    <EditsEditUsers :users="users" />
    <span>{{ users }}</span>
    <span>{{ realUsers }}</span>
</template>