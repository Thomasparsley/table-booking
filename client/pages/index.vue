<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

function currentDate() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return date.toISOString().substr(0, 16);
}

const reservations = await fetchReservations(currentDate()) as any[];

const isAdmin = await isUserAdmin();
</script>

<template>
    <section class="px-4 pt-2">
        <h3 class="my-2 text-3xl font-medium">Nadcházející rezervace</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReservationCard :reservation="reservation" v-for="reservation in reservations" :key="reservation._id" />
        </div>
    </section>
</template>