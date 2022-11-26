<script setup lang="ts">

const { notification } = defineProps(["notification"])

</script>

<template>
    <div class="border border-gray-200">
        <div class="flex items-center p-4">
            <img alt="avatar"
                src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-12 w-12 rounded-lg object-cover" />

            <div class="ml-3 overflow-hidden">
                <p class="font-medium text-gray-900"><strong>Carol Daines</strong> vás přidal k akci <strong>Meeting
                        101</strong>.</p>

                <div class="flex flex-row text-sm text-gray-700 gap-1">
                    <p>
                        Datum:
                    </p>
                    <time>10:00</time>
                </div>
            </div>
        </div>
    </div>
</template>