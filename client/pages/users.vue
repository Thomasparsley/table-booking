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
}
</script>

<template>
    <UsersTable />
</template>