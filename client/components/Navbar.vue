<template>
    <header aria-label="Site Header" class="shadow-sm">

        <div class="mx-auto flex items-center justify-between h-16 max-w-screen-xl px-4">
            <!-- Logo -->
            <NavLogo />

            <!-- Nav web -->
            <nav aria-label="Site Nav"
                class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1">
                <a class="text-gray-900" href="">About</a>
                <a class="text-gray-900" href="">Blog</a>
                <a class="text-gray-900" href="">Projects</a>
                <a class="text-gray-900" href="">Contact</a>
            </nav>

            <!-- Login web -->
            <div class="hidden items-center gap-4 lg:flex">
                <a href="#" class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600">
                    Log in
                </a>

                <a href="#" class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">
                    Sign up
                </a>
            </div>

            <!-- Profile mobile -->
            <div class="flex lg:hidden">
                <button class="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
                    <span class="sr-only">Account</span>
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Nav mobile -->
        <div class="absolute bottom-0 w-screen border-t border-gray-100 lg:hidden">
            <nav class="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
                <a class="flex-shrink-0 pl-4 text-gray-900" href="">About</a>
                <a class="flex-shrink-0 pl-4 text-gray-900" href="">Blog</a>
                <a class="flex-shrink-0 pl-4 text-gray-900" href="">Projects</a>
                <a class="flex-shrink-0 pl-4 text-gray-900" href="">Contact</a>
            </nav>
        </div>
    </header>
</template>