<script>

export default {
    setup() {
        definePageMeta({
            middleware: ["auth"]
        })
    },

    data() {
        return {
            tables: [{
                name: 'nana',
                descript: 'nejvetsi',
                chairs: 4,
                room: 12
            },
            {
                name: 'Haha',
                descript: 'nejmensi',
                chairs: 5,
                room: 10
            }]
        }
    },
}

</script>

<template>
    <!-- <h1 class="mt-4 ml-4 text-3xl font-medium">Vítej na domovské stránce</h1>
    <UtilsHorizontalLine /> -->
    <section>
        <h2 class="ml-4 mx-4 text-3xl font-medium">Notifikace</h2>
        <div class="flex flex-col">
            <NotificationsNotification />
            <NotificationsNotification />
            <NotificationsNotification />
        </div>
    </section>
    <div class="py-4 pl-4 bg-gray-300">
        <h3 class="text-3xl font-medium">Rezervace</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReservationCard />
            <ReservationCard />
            <ReservationCard />
        </div>
    </div>
</template>