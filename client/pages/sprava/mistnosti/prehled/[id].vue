
<template>
    <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <strong
                class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pre Order
            </strong>

            <div class="mt-8 flex justify-between">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        Název místnosti
                    </h1>

                    <p class="mt-0.5 text-sm">Ikona a umístění místnosti</p>
                </div>

                <details class="group relative mt-4">
                    <summary class="block">
                        <div>
                            <div class="prose max-w-none group-open:hidden">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    veniam dicta beatae eos ex error culpa delectus rem tenetur,
                                    architecto quam nesciunt, dolor veritatis nisi minus
                                    inventore, rerum at recusandae?
                                </p>
                            </div>
                        </div>
                    </summary>
                </details>

                <form class="mt-8">
                    <fieldset>
                        <legend class="mb-1 text-sm font-medium">Color</legend>

                        <div class="flow-root">
                            <div class="-m-0.5 flex flex-wrap">
                                <UtilsBadge />
                                <UtilsBadge />
                                <UtilsBadge />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="mt-4">
                        <legend class="mb-1 text-sm font-medium">Size</legend>

                        <div class="flow-root">
                            <div class="-m-0.5 flex flex-wrap">
                                <label for="size_xs" class="cursor-pointer p-0.5">
                                    <input type="radio" name="size" id="size_xs" class="peer sr-only" />

                                    <span
                                        class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                        XS
                                    </span>
                                </label>

                                <label for="size_s" class="cursor-pointer p-0.5">
                                    <input type="radio" name="size" id="size_s" class="peer sr-only" />

                                    <span
                                        class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                        S
                                    </span>
                                </label>

                                <label for="size_m" class="cursor-pointer p-0.5">
                                    <input type="radio" name="size" id="size_m" class="peer sr-only" />

                                    <span
                                        class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                        M
                                    </span>
                                </label>

                                <label for="size_l" class="cursor-pointer p-0.5">
                                    <input type="radio" name="size" id="size_l" class="peer sr-only" />

                                    <span
                                        class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                        L
                                    </span>
                                </label>

                                <label for="size_xl" class="cursor-pointer p-0.5">
                                    <input type="radio" name="size" id="size_xl" class="peer sr-only" />

                                    <span
                                        class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                        XL
                                    </span>
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div class="mt-8 flex">
                        <div>
                            <label for="quantity" class="sr-only">Qty</label>

                            <input type="number" id="quantity" min="1" value="1"
                                class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                        </div>

                        <button type="submit"
                            class="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500">
                            Add to Cart
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

</template>