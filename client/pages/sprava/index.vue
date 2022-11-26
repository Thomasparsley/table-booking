<script setup lang="ts">
const allRooms: any[] = await fetchRooms();
</script>

<template>
    <section>
        <h2>Stoly</h2>

        <NuxtLink to="/sprava/stoly/pridat">
            Přidat stůl
        </NuxtLink>

        <ul>
            <li></li>
        </ul>
    </section>

    <section>
        <h2>Místnosti</h2>

        <NuxtLink to="/sprava/mistnosti/pridat">
            Přidat místnost
        </NuxtLink>

        <ul>
            <li v-for="room in allRooms" :key="room._id">
                <NuxtLink :to="`/sprava/mistnosti/${room._id}/prehled`">
                    {{ room.name }}
                </NuxtLink>
            </li>
        </ul>
    </section>


</template>