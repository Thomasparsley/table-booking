<script setup lang="ts">
const { name, place } = defineProps({
    name: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    chairs: {
        type: Number,
        required: true,
    },
    features: {
        type: Array<any>,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <article class="rounded-lg border border-gray-100 bg-white p-6" :class="{ 'ring-blue-600 ring-2': active }">
        <div class="flex flex-col gap-1">
            <h3 class="text-2xl font-medium text-gray-900">
                {{ name }}
            </h3>

            <div class="flex flex-row gap-2">
                <div class="flex flex-row gap-1">
                    <IconPeople />
                    <p class="text-sm text-gray-600">
                        {{ chairs }}
                    </p>
                </div>

                <div class="flex flex-row gap-1">
                    <IconPlace />
                    <p class="text-sm text-gray-600">
                        {{ place }}
                    </p>
                </div>
            </div>

            <div class="flex flex-row gap-1" v-if="features.length > 1">
                <IconTool />
                <div v-for="feature in features" class="text-sm text-gray-600">
                    {{ feature }}
                </div>
            </div>
        </div>
    </article>
</template>