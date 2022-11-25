<template>
    <div class="fixed bottom-0 w-screen border-t border-gray-200 bg-gray-100 lg:hidden">
        <nav class="flex items-center justify-center gap-8 md:gap-16 overflow-x-auto p-4 text-sm font-medium">
            <NuxtLink class="flex-shrink-0 pl-4 text-gray-900" to="/">Domů</NuxtLink>
            <NuxtLink class="flex-shrink-0 pl-4 text-gray-900" to="/tables">Stoly</NuxtLink>
            <NuxtLink class="flex-shrink-0 pl-4 text-gray-900" to="/users">Uživatelé</NuxtLink>
            <NuxtLink class="flex-shrink-0 pl-4 text-gray-900" to="/edits">Úpravy</NuxtLink>
        </nav>
    </div>
</template>