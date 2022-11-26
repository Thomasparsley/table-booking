<script setup lang="ts">
const { reservation } = defineProps(["reservation"])


/* let fromDate = null;
let toDate = null;

const isReservationMoreThanOneDay = () => {
    return fromDate.getDate() !== toDate.getDate()
} */

function calcRoomChairs(tables: any[] = []) {
    return tables.reduce((acc, table) => acc + table.seatCount, 0);
}

// const users = await fetchUsersFromReservation(reservation._id)
</script>

<template>
    <NuxtLink class="text-gray-900 hover:text-blue-500" :to="`/sprava/eventy/${reservation._id}/prehled`">
        <div class="rounded-lg p-4 bg-white shadow shadow-indigo-100">
            <div class="flex flex-col space-y-1 p-2 border-l-4 border-green-500">
                <h3 class="text-xl font-bold text-gray-900">
                    {{ reservation.name }}
                </h3>
                <div class="flex gap-1">
                    <UtilsBadge>
                        <IconPerson class="w-4 h-4" />
                        {{ calcRoomChairs(reservation.tables) }}
                    </UtilsBadge>
                    <UtilsBadge>Více denní</UtilsBadge>
                    <UtilsBadge>Akce</UtilsBadge>
                </div>
            </div>

            <div class="mt-2 p-4">
                <dl class="flex flex-row flex-wrap gap-1 justify-between items-center">
                    <div>
                        <dd class="text-medium flex flex-col font-bold">
                            <!-- <span>
                            {{ fromDate.getDay() }}. {{ fromDate.getMonth() }} {{ fromDate.getFullYear() }},
                        </span>
                        <span>
                            {{ fromDate.getHours() }}:{{ fromDate.getMinutes() }}
                        </span> -->
                        </dd>
                    </div>
                    <IconArrorRight class="w-10 h-10" />
                    <div>
                        <dd class="text-medium flex flex-col font-bold">
                            <!-- <span>
                            {{ toDate.getDay() }}. {{ toDate.getMonth() }} {{ toDate.getFullYear() }},
                        </span>
                        <span>
                            {{ toDate.getHours() }}:{{ toDate.getMinutes() }}
                        </span> -->
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </NuxtLink>
</template>