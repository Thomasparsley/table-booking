<script>
export default {
    setup() {
        definePageMeta({
            middleware: ["auth"]
        })
    },

    data() {
        return {
            onlyFoll: false
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
                i++;
            }
            return users;
        }
    }
}
</script>

<template>
    <UsersTable :onlyFoll="onlyFoll" />
</template>