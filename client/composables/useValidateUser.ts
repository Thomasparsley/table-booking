export default async function (): Promise<boolean> {
    const path = useApiPath("validate");
    const response = await useFetch(path, {
        credentials: "include",
    })

    return response.error == null;
}