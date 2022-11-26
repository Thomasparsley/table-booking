<script>
export default {
    setup() {
        definePageMeta({
            middleware: ["auth"]
        })
    },

    data() {
        return {

        }
    },
    methods: {
        generateUsers() {
            var i = 0;
            const users = [];
            while (i < 100) {
                users.push({
                    _id: "" + i,
                    firstName: "Ahoj" + i,
                    lastName: "Cus" + i,
                    email: "nazdar@" + i,
                    following: ["99"]
                })
            }
            return users;
        }
    }
}
</script>

<template>
    <UsersTable :sampleUsers="generateUsers()" />
</template>