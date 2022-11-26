<template>
    <div class="rounded-lg p-4 bg-white shadow shadow-indigo-100">
        <div class="flex flex-col space-y-1 p-2 border-l-4 border-green-500">
            <h3 class="text-xl font-bold text-gray-900">
                Název rezervace
            </h3>
            <div class="flex gap-1">
                <UtilsBadge>
                    <IconPerson class="w-4 h-4" />
                    8
                </UtilsBadge>
                <UtilsBadge>Více denní</UtilsBadge>
                <UtilsBadge>Akce</UtilsBadge>
            </div>
        </div>

        <div class="mt-2 p-4">
            <dl class="flex flex-row flex-wrap gap-1 justify-between items-center">
                <div>
                    <dd class="text-medium flex flex-col font-bold">
                        <span>
                            11. Čer 2022,
                        </span>
                        <span>
                            11:30
                        </span>
                    </dd>
                </div>
                <IconArrorRight class="w-10 h-10" />
                <div>
                    <dd class="text-medium flex flex-col font-bold">
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