<script>
export default {
    setup() {
        definePageMeta({
            middleware: ["auth"]
        })
    }
}
</script>

<template>
    <div class="flex flex-col relative">
        <div class="h-32 lg:h-48 w-full image-background md:bg-cover"></div>

        <img alt="uživatel"
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            class="h-24 w-24 lg:w-36 lg:h-36 border-white border-4 rounded-full object-cover absolute top-20 lg:top-28 mx-6 lg:mx-36" />

        <div class="px-6 lg:px-36 mt-14 lg:mt-20">
            <div>
                <h3 class="text-4xl font-medium">Claire Mac</h3>
                <div class="text-base font-medium text-gray-600">example@hella.cz</div>
                <div class="text-base font-medium text-gray-600">+420 738 283 282</div>

                <UtilsHorizontalLine />

                <ProfileFriendList />
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-background {
    background-image: url("/img/profile-background.svg");
    background-repeat: no-repeat;
    background-position: center;
}
</style>

