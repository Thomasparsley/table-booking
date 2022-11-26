<template>
    <div class="relative min-h-screen">
        <NavNavbar />

        <main class="mx-auto max-w-7xl px-0 md:px-8 lg:px-14 mb-20">
            <slot />
        </main>

        <NavMobile />
    </div>
</template>