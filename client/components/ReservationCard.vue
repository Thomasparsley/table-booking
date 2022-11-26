<template>
    <div class="block rounded-lg p-4 bg-white shadow-sm shadow-indigo-100">
        <div class="flex flex-col space-y-1 p-2 border-l-4 border-green-500">
            <h3 class="text-2xl font-bold text-gray-900">
                Název rezervace
            </h3>
            <div class="flex gap-1">
                <UtilsBadge>
                    8
                    <IconPerson />
                </UtilsBadge>
                <UtilsBadge>Více denní</UtilsBadge>
                <UtilsBadge>Akce</UtilsBadge>
            </div>
        </div>

        <div class="mt-2 p-4">
            <dl class="flex flex-row flex-wrap gap-1 justify-between items-center">
                <div>
                    <dt class="text-medium text-gray-500 text-base">Datum od</dt>
                    <dd class="text-medium flex flex-row font-bold">
                        <span>
                            11. Čer 2022,
                        </span>
                        <span>
                            11:30
                        </span>
                    </dd>
                </div>

                <div>
                    <dt class="text-medium text-gray-500 text-base">Datum do</dt>
                    <dd class="text-medium flex flex-row font-bold">
                        <span>
                            11. Čer 2022,
                        </span>
                        <span>
                            15:45
                        </span>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>