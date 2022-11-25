export default async function (): Promise<boolean> {
    const path = useApiPath("/auth/validate");
    const response = await useFetch(path, {
        method: "POST",
        credentials: "include",
    })

    console.log(response.error.value);

    return response.error == null;
}