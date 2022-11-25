<template>
    <div class="relative min-h-screen">
        <NavNavbar />

        <main class="mx-auto max-w-7xl mt-2 px-4 md:px-8 lg:px-14 mb-20">
            <slot />
        </main>
        <NavMobile />
    </div>
</template>