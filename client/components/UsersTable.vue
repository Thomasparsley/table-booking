<script>
export default {
    props: ['sampleUsers'],
    data() {
        return {
            filter: "",
            users: [],
            loggedUser: {
                fallowing: ["50"]
            },
            loaded: false,
            includeFallowing: true,
        }
    },

    async mounted() {
        console.log("Fetch self: ")
        //this.loggedUser = await fetchSelf();
        //console.log(JSON.stringify(this.loggedUser));

        //this.users = await fetchUsers();
        //console.log(this.users);
    },

    methods: {
        async onAddFollow(user) {
            return true
            await addFollow(user._id)
            this.loggedUser = await fetchSelf()
        },
        async onDeleteFollow(user) {
            return true
            await deleteFollow(user._id)
            this.loggedUser.following = this.loggedUser.following.filter(id => id != user._id)
            this.loggedUser = await fetchSelf()
        },
        followed(user) {
            return true
            console.log("following:" + JSON.stringify(this.loggedUser.following))
            return this.loggedUser.following.includes(user._id)
        },
    },

    computed: {
        filteredUsers() {
            const result = this.sampleUsers.filter(user.firstName.includes(this.filter) || user.lastName.includes(this.filter) || user.email.includes(this.filter)))
            if (this.includeFallowing) {
                return result.filter(user => this.loggedUser.fallowing.includes(user._id));
            }
            return result;
        }
    }
}
</script>

<template>
    <section class="md:mt-8">
        <div class="w-full max-w-3xl mx-auto bg-white shadow-lg md:rounded-md border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Uživatelé</h2>
            </header>
            <label for="UserEmail"
                class="relative block overflow-hidden px-4 pt-4 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">

                <input v-model="filter" type="email" id="UserEmail" placeholder="Email"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

                <span
                    class="absolute left-5 top-2 -translate-y-1/4 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Hledej
                </span>
            </label>
            <div class="form-check ml-5 mt-5">
                <input v-model="includeFallowing"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                    Jen sledované
                </label>
            </div>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Name</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Akce</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="user in filteredUsers" :key="user.id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-medium text-gray-800">{{ user.firstName }} {{ user.lastName }}
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{ user.email }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button v-if="!followed(user)" @click="onAddFollow(user)"
                                        class="text-left">Sledovat</button>
                                    <button v-else @click="onDeleteFollow(user)" class="text-left">Nesledovat</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>