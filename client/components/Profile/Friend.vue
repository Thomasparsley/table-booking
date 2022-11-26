<script setup lang="ts">

const { friend } = defineProps(["friend"])

const avatars = [
    "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "https://images.unsplash.com/photo-1668661628231-d630edd8ad95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1018&q=80",
    "https://images.unsplash.com/photo-1668634038912-1735064107e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1668634038912-1735064107e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://unsplash.com/photos/wYOuuAqbs5s",
    "https://images.unsplash.com/photo-1662988836971-aefba0a7907a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1657292171722-80d8bd5cbf51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1658177909265-fa8231c54f38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
]

// function thet returns random avatar
const getRandomAvatar = () => {
    return avatars[Math.floor(Math.random() / avatars.length)]
}
</script>


<template>
    <div class="border-gray-700 bg-gray-50 rounded-lg p-4 shadow-sm shadow-indigo-100">
        <div class="flex items-center">
            <img alt="Developer" :src="getRandomAvatar()" class="h-16 w-16 rounded-full object-cover" />

            <div class="ml-3 flex">
                <h3 class="text-lg font-medium" v-if="friend">{{ friend.firstName }}</h3>
                <div>
                    <IconUserDelete class="w-8 h-8" />
                </div>
            </div>
        </div>
    </div>
</template>