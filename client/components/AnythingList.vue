<script>

export default {
    name: 'AnythingList',
    props: [items]
}

</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <span v-for="(value, key) in item" :key="key">
                {{ key }}: {{ value }}
            </span>
        </li>
    </ul>
</template>