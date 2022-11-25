const tokenName = "token";

export default async function (token: string): Promise<boolean> {
    const path = useApiPath("/auth/validate");
    const response = await useFetch(path, {
        method: "POST",
        credentials: "include",
        headers: {
            cookie: `${tokenName}=${token}`,
        }
    });

    return response.error.value == null;
}