<script setup lang="ts">
definePageMeta({
    // @ts-ignore
    layout: "navless",
    // @ts-ignore
    middleware: ["is-auth"],
});

const loginForm = ref({
    email: "test@test.com",
    password: "12345",
});

const loginPath = useApiPath("/auth/login");
async function sendLogin() {
    const response = await useFetch(loginPath, {
        method: "POST",
        body: JSON.stringify(loginForm.value),
        credentials: "include",
    });

    if (!response.error.value) {
        await navigateTo("/");
    }
}
</script>

<template>
    <div class="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-4">
            <div>
                <img class="mx-auto h-36 w-auto" src="/img/forvia.png" alt="Forvia Hella" />
                <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">Přihlášení
                </h2>
            </div>
            <form class=" space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only">Email</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required
                            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Email" v-model="loginForm.email" />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Heslo</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Heslo" v-model="loginForm.password" />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Zapamatovat</label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Zapomenuté heslo?</a>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        @click.prevent="sendLogin()">
                        Přihlásit se
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
