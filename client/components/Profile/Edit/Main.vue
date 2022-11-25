
<template>
    <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
                <div class="">
                    <h3 class="pl-4 pt-4 text-lg font-medium leading-6 text-gray-900">Změnit heslo</h3>
                    <p class="pl-4 pt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aut
                        corporis est ipsa eius, reprehenderit quis esse dolore architecto eaque molestiae blanditiis
                        veritatis iusto non voluptatum, vero quia laboriosam corrupti expedita?</p>
                </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
                <form action="#" class="mt-8 flex flex-col gap-4">
                    <div class="overflow-hidden shadow sm:rounded-md">
                        <div class="bg-white px-4 py-5 sm:p-6">
                            <div class="py-4">
                                <label for="Password" class="block text-sm font-medium text-gray-700">
                                    Heslo
                                </label>

                                <input type="password" id="Password" name="password"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                            </div>
                            <div class="py-4">
                                <label for="confPassword" class="block text-sm font-medium text-gray-700">
                                    Potvrzení hesla
                                </label>

                                <input type="password" id="confPassword" name="confPassword"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button type="submit"
                                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Změnit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <HorizontalLine />

    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <div class="">
                <h3 class="pl-4 pt-4 text-lg font-medium leading-6 text-gray-900">Změnit email</h3>
                <p class="pl-4 pt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut
                    corporis est ipsa eius, reprehenderit quis esse dolore architecto eaque molestiae blanditiis
                    veritatis iusto non voluptatum, vero quia laboriosam corrupti expedita?</p>
            </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <form action="#" class="mt-8 flex flex-col gap-4">
                <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="bg-white px-4 py-5 sm:p-6">
                        <div class="py-4">
                            <label for="email" class="block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input type="email" id="email" name="email"
                                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>
                        <div class="py-4">
                            <label for="confEmail" class="block text-sm font-medium text-gray-700">
                                Potvrzení emailu
                            </label>

                            <input type="email" id="confEmail" name="confEmail"
                                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit"
                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Změnit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <HorizontalLine />

    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <div class="">
                <h3 class="pl-4 pt-4 text-lg font-medium leading-6 text-gray-900">Preferované vybavení</h3>
                <p class="pl-4 pt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut
                    corporis est ipsa eius, reprehenderit quis esse dolore architecto eaque molestiae blanditiis
                    veritatis iusto non voluptatum, vero quia laboriosam corrupti expedita?</p>
            </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <form action="#" class="mt-8 flex flex-col gap-4">
                <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="bg-white px-4 py-5 sm:p-6">
                        <ProfileEditRadio />
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit"
                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Změnit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  