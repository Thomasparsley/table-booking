export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie("token")
    if (!token.value) {
        return true;
    }

    const isValidated = await useValidateUser(token.value);
    console.log(isValidated);
    if (isValidated) {
        return navigateTo("/");
    }
    return true;
});
