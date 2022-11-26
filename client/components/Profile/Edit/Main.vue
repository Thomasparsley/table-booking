
<template>
    <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
                <div class="">
                    <h3 class="pl-4 pt-4 text-lg font-medium leading-6 text-gray-900">Změnit heslo</h3>
                    <p class="pl-4 pt-2 text-sm text-gray-600">Zabezpečení hesla začíná vytvořením silného hesla. Silné
                        heslo je:

                        Alespoň 12 znaků, lépe však 14 a více.
                        Kombinace velkých a malých písmen, číslic a symbolů.
                        Nejedná se o slovo, které lze najít ve slovníku, ani o název osoby, postavy, produktu nebo
                        organizace.
                        Výrazně se liší od vašich předchozích hesel.
                        Snadno zapamatovatelné pro vás, ale obtížně uhodnutelné pro ostatní. Zvažte použití
                        zapamatovatelné fráze, například "6MonkeysRLooking^".
                    </p>
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
                <p class="pl-4 pt-2 text-sm text-gray-600">Zadejte nový email. Následně jej budete muset potvrdit.</p>
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

    <UtilsHorizontalLine />

    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <div class="">
                <h3 class="pl-4 pt-4 text-lg font-medium leading-6 text-gray-900">Změnit telefon</h3>
                <p class="pl-4 pt-2 text-sm text-gray-600">Zadejte nové telefonní číslo. Následně jej budete muset
                    potvrdit.</p>
            </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <form action="#" class="mt-8 flex flex-col gap-4">
                <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="bg-white px-4 py-5 sm:p-6">
                        <div class="py-4">
                            <label for="phone" class="block text-sm font-medium text-gray-700">
                                Tel
                            </label>

                            <input type="tel" id="phone" name="phone" placeholder="123 456 789"
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

    <UtilsHorizontalLine />

    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <div class="">
                <h3 class="pl-4 pt-4 text-lg font-medium leading-6 text-gray-900">Preferované vybavení</h3>
                <p class="pl-4 pt-2 text-sm text-gray-600">Vyberte vaše preferované vybavení stolů. Toto vybavení se
                    následně promítne do filtrování při hledání.</p>
            </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <form action="#" class="mt-8 flex flex-col gap-4">
                <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="bg-white px-4 py-5 sm:p-6">
                        <div>
                            <label for="feature-doc" class="block text-sm font-medium text-gray-700">Typ dokovací
                                stanice</label>
                            <select id="feature-doc" name="feature-doc"
                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                multiple>
                                <option>TX534</option>
                                <option>AB 32 USB+</option>
                                <option>ThunderFlame</option>
                                <option>Electric S4</option>
                            </select>
                        </div>

                        <div class="mt-4">
                            <label for="feature-monitor" class="block text-sm font-medium text-gray-700">Speciální
                                monitory</label>
                            <select id="feature-monitor" name="feature-monitor"
                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                multiple>
                                <option>UltraWide BG35 8k</option>
                                <option>SD wide 35 Logic</option>
                                <option>MetalMonitor G43</option>
                                <option>IIMAYA T21/9</option>
                            </select>
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
</template>
  