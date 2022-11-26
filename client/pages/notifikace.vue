<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})
</script>

<template>
    <section>
        <h2 class="ml-4 my-2 text-3xl font-medium">Notifikace</h2>
        <div class="flex flex-col">
            <NotificationsNotification />
            <NotificationsNotification />
            <NotificationsNotification />
        </div>
    </section>
</template>