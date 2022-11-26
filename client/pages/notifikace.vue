<script setup lang="ts">
const allUserNotification = await fetchNotifications() as any[];
</script>

<template>
    <section>
        <h2 class="ml-4 my-2 text-3xl font-medium">Notifikace</h2>
        <div class="flex flex-col gap-3">
            <div v-for="notification in allUserNotification" :key="notification.id">
                <NotificationsNotification :notification="notification" />
            </div>
        </div>
    </section>
</template>