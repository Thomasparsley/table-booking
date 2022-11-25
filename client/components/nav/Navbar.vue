<template>
    <header aria-label="Site Header" class="shadow-sm">
        <div class="mx-auto flex items-center justify-between h-16 max-w-screen-xl px-4">
            <NavLogo />

            <nav aria-label="Site Nav"
                class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1">
                <NuxtLink class="text-gray-900" to="/">
                    Domů
                </NuxtLink>
                <NuxtLink class="text-gray-900" to="/tables">
                    Stoly
                </NuxtLink>
                <NuxtLink class="text-gray-900" to="/users">
                    Uživatelé
                </NuxtLink>
                <NuxtLink class="text-gray-900" to="/edits">
                    Úpravy
                </NuxtLink>
            </nav>

            <NavDropdown />
        </div>
    </header>
</template>