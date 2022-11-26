<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const route = useRoute();
const id = route.params.id as string;
const tables = await fetchTablesInRoom(id) as any[];

const pathToNew = `/sprava/mistnosti/${id}/stoly/pridat`;
</script>

<template>
    <TableList :tables="tables" :pathToNew="pathToNew" :tableId="id" />
</template>