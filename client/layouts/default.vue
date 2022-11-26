<template>
    <div class="relative min-h-screen">
        <NavNavbar />

        <main class="mx-auto max-w-7xl mb-20">
            <slot />
        </main>

        <NavMobile />
    </div>
</template>