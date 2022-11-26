<script>
export default {
    setup() {
        definePageMeta({
            middleware: ["auth"]
        })
    },

    data() {
        return {
            friends: [
                {
                    _id: "15",
                    firstName: "Pepa",
                    lastName: "Zdepa",
                    following: ["11", "16"]
                },
                {
                    _id: "11",
                    firstName: "Josef",
                    lastName: "Zgaraze",
                    following: ["11", "16"]
                },
                {
                    _id: "12",
                    firstName: "Jarda",
                    lastName: "Garda",
                    following: ["15", "11"]
                },
                {
                    _id: "10",
                    firstName: "Zdíša",
                    lastName: "Bíša",
                    following: ["15", "10"]
                },
                {
                    _id: "9",
                    firstName: "Radomila",
                    lastName: "Křehká",
                    following: ["16", "14"]
                }
            ],
            loggedUser: {
                firstName: "Radomila",
                lastName: "Křehká",
                following: ["11", "15", "10", "9"],
                _id: "16"
            },
            ready: false
        }
    },
    mounted() {
        this.friends = this.friends.filter(user => this.loggedUser.following.includes(user._id) && user.following.includes(this.loggedUser._id))
        this.ready = true
    },
}
</script>

<template>
    <h3 class="my-2 text-3xl font-medium">
        Přátelé
    </h3>
    <div v-if="ready" class="grid gap-4 md:grid-cols-2">
        <div v-for="friend in friends" :key="friend.id">
            <ProfileFriend :friend="friend" />
        </div>
    </div>
</template>