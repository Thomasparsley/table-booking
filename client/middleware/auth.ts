export default defineNuxtRouteMiddleware(async (to, from) => {
    const isValidated = await useValidateUser();
    if (!isValidated) {
        return navigateTo("/login");
    }

    if (to.path === "/login") {
        return navigateTo("/");
    }
});
