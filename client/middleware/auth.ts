export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie("token")
    if (!token.value) {
        return navigateTo("/login");
    }

    const isValidated = await useValidateUser(token.value);
    if (!isValidated) {
        return navigateTo("/login");
    }

    if (to.path === "/login") {
        return navigateTo("/");
    }

    return true;
});
