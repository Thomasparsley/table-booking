<script>
export default {
    setup() {
        definePageMeta({
            middleware: ["auth"]
        })
    },

    data() {
        return {
            events: []
        }
    },
    mounted() {
        // this.events = fetchEvents()
    }
}
</script>

<template>
    <section class="px-4 pt-2">
        <h3 class="my-2 text-3xl font-medium">Nadcházející rezervace</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- <ReservationCard v-for="event in events" :key="event.id" /> -->

            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
        </div>
    </section>
</template>