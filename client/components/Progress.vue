<script setup lang="ts">
const { percentage } = defineProps({
    percentage: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <div>
        <h2 class="sr-only">Steps</h2>

        <div>
            <div class="overflow-hidden rounded-full bg-gray-200">
                <div class="h-2 rounded-full bg-blue-500" :style="`width: ${percentage}%`"></div>
            </div>

            <ol class="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                <li class="flex items-center justify-start text-blue-600">
                    <span class="hidden sm:inline"> Datum </span>


                    <svg class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z" />
                    </svg>
                </li>

                <li class="flex items-center justify-center">
                    <span class="hidden sm:inline"> Prostory </span>

                    <svg class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </li>

                <li class="flex items-center justify-end">
                    <span class="hidden sm:inline"> Potvrzení </span>

                    <svg class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                    </svg>
                </li>
            </ol>
        </div>
    </div>
</template>