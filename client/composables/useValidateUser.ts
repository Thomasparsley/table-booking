import useApiFetch from "./useApiFetch";

const tokenName = "token";

export default async function (token: string): Promise<boolean> {
    const response = await useApiFetch("/auth/validate", {
        method: "POST",
        credentials: "include",
        headers: {
            cookie: `${tokenName}=${token}`,
        }
    })

    return response.error.value == null;
}