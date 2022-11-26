<script>
export default {
    methods: {
        async logout() {
            await useLogout();
            await navigateTo("/login")
        }
    }
}
</script>

<template>

    <Menu as="div" class="relative text-left flex">
        <div class="h-10 w-10 flex">
            <MenuButton
                class="rounded-full bg-gray-100 p-2 text-gray-600 flex w-full justify-center relative after:w-3 after:h-3 after:bg-red-500 after:rounded-full after:absolute after:right-0 after:top-0">
                <IconPerson />
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute right-0 z-10 mt-16 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                    <MenuItem v-slot="{ active }">
                    <NuxtLink to="/profile"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                        Profil</NuxtLink>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <NuxtLink to="/notifikace"
                        class="relative after:w-3 after:h-3 after:bg-red-500 after:rounded-full after:absolute after:right-4 after:top-3"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                        Notifikace
                    </NuxtLink>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <NuxtLink to="/userEdit"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                        Nastavení</NuxtLink>
                    </MenuItem>
                </div>
                <div class="py-1">
                    <MenuItem v-slot="{ active }">
                    <NuxtLink to="/login" @click="logout"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                        Odhlásit</NuxtLink>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>
